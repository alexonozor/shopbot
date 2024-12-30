import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from 'src/app/shared/services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
declare var require: any;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { OrderCancelationComponent } from 'src/app/shared/components/order-cancelation/order-cancelation.component';
import { Rider } from 'src/app/shared/models/rider';
import { STATUS_ENUM, STATUS, Status, StatusParams, getStatus } from 'src/app/shared/constants/order-status.constant';


const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  order!: Order;
  riders: Rider[] = []
  isCanceling!: boolean;
  isAccepting!: boolean;

  statuses = STATUS
  cancelationDialogRef!: MatDialogRef<OrderCancelationComponent>


  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private _matDialog: MatDialog,
    private _matSnack: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.order = this.route.snapshot.data['order'] as Order
    this.riders = this.route.snapshot.data['riders'] as Rider[]
  }

  optionsPrice(options: any): number {
    return options.reduce((sum: any, currentItem: any) => {
      return sum + (currentItem.price * currentItem.quantity);
    }, 0)
  }

  accept() {
    this.isAccepting = true;
    const acceptedStatus = getStatus(STATUS_ENUM.ACCEPTED);
    this.updateStatusChange(acceptedStatus);
    this.order.category = 'Processing';
  }

  cancelOrder() {
    this.isCanceling = true;
    const cancelStatus = getStatus(STATUS_ENUM.CANCELED);
    this.cancel({orderId: this.order._id, userId: this.order.user._id, statusNumber: cancelStatus.id})
    this.order.category = 'Canceled'
  }

  cancel(statusParams: StatusParams) {
    this.cancelationDialogRef = this._matDialog.open(OrderCancelationComponent, {
      disableClose: false
    });
    this.cancelationDialogRef.componentInstance.title = 'Cancel orders?';
    this.cancelationDialogRef.componentInstance.confirmMessage = 'Tell us why you are canceling this order?';
    this.cancelationDialogRef.componentInstance.confirmButton = 'Cancel Order';
    this.cancelationDialogRef.afterClosed().subscribe(result => {
      if (result) {
        statusParams['vendorIssue'] = result.vendorIssue
        statusParams['orderCancellationReason'] = result.text
        this.orderService.updateOrderStatus({orderId: this.order._id, userId: this.order.user._id, statusNumber: STATUS_ENUM.CANCELED}).subscribe((data: any) => {
          this.isCanceling = false;
          this.isAccepting = false;
          this._matSnack.open(`You have updated this order to Canceled`, 'Close', { duration: 3000 })
        })
        this.orderService.updateOrder(this.order._id, { orderCancellationReason: result.text }).subscribe()
      }
    });
  }



  updatePaymentStatus(order: Order, event: any) {
    this.orderService.updateOrder(order._id, { paymentStatus: event.value })
      .pipe(finalize(() => this.isCanceling = false))
      .subscribe((data) => {
        order.paymentStatus = event.value
        this._matSnack.open('Payment updated!', 'Close', { duration: 3000 })
      })
  }

  compareFn(t1: any, t2: any): boolean {
    return t1 && t2 ? t1.name === t2 : t1.name === t2;
  }

  updateStatusChange(statusParams: Status) {
    if (statusParams.id === STATUS_ENUM.CANCELED) {
      this.cancelOrder();
    } else {
      this.orderService.updateOrderStatus({orderId: this.order._id, userId: this.order.user._id, statusNumber: statusParams.id}).subscribe((data: any) => {
        this.isCanceling = false;
        this.isAccepting = false;
        this._matSnack.open(`You have updated this order to ${statusParams.name}`, 'Close', { duration: 3000 })
      })
    }
  }



  selectRider(event: any) {
      this.orderService.updateOrder(this.order._id, {rider: event.value}).subscribe((data: any) => {
        this._matSnack.open(`You have assigned a rider to this order`, 'Close', { duration: 3000 })
      })
    
  }

  public exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
  }


  open() {
    window.open(`google.navigation:q=${this.order.store.location?.coordinates[0]}+${this.order.store.location?.coordinates[1]}`, '_blank');

  }

}
