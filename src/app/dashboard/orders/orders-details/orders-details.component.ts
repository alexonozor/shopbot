import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from 'src/app/shared/services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {

  order!: Order;
  isCanceling!: boolean;
  isAccepting!: boolean;
  statuses = [
    { id: 0, name: "Accepted", color: "text-yellow-700"},
    { id: 1, name: "Preparing", color: "text-blue-500"},
    { id: 2, name: "Ready for Pickup", color: "text-blue-500"},
    { id: 4, name: "Shipped", color: "text-blue-500"},
    { id: 3, name: "Canceled", color: "text-red-500"},
    { id: 5, name: "Delivered", color: "text-green-500"},
  ]

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private _matDialog: MatDialog,
    private _matSnack: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.order = this.route.snapshot.data['order']  as Order
  }

  optionsPrice(options:any): number {
    return options.reduce((sum:any, currentItem:any) => {
      return sum + (currentItem.price * currentItem.quantity);
    }, 0)
  }

  accept(order:Order) {
    this.isAccepting = true;
    this.updateStatus({ id: 0, name: "Accepted", color: "text-yellow-700"}, order, false)
    order.category =  'Processing'
  }

  

  cancelOrder(order:Order) {
    this.isCanceling = true;
    this.updateStatus({ id: 3, name: "Canceled", color: "text-red-500"}, order, false)
    order.category =  'Canceled'
  }

  updatePaymentStatus(order: Order, event:any) {
    this.orderService.updateOrder(order._id, {paymentStatus: event.value })
    .pipe(finalize(() => this.isCanceling = false) )
    .subscribe((data) => {
      order.paymentStatus =  event.value
      this._matSnack.open('Payment updated!', 'Close', {duration: 3000})
    })
  }

  compareFn(t1: any, t2: any): boolean { 
    return t1 && t2 ? t1.name === t2 : t1.name === t2;
    }

  updateStatus(event:any, order:any, eventType = true) {
    this.orderService.updateOrderStatus(order._id, order.user._id, eventType?  event.value :  event).subscribe((data:any) => {
      this.isCanceling = false;
      this.isAccepting = false;
      this._matSnack.open(`You have updated this order to ${event.value.name}`, 'Close', {duration: 3000})
    })
  }

}
