import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Payment } from 'src/app/shared/models/payment';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { CreatePaymentsComponent } from '../create-payments/create-payments.component';
import { EditPaymentsComponent } from '../edit-payments/edit-payments.component';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.scss']
})
export class ListPaymentsComponent implements OnInit {

  public payments: Payment[] = [];
  confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;

  constructor(
    private settingsService: SettingsService,
    public _matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.payments = this.route.snapshot.data['payments'] as Payment[]
  }

  delete(index: number, id: any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Payment?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Payment?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.payments.splice(index, 1)
        this.settingsService.deletePayment(id).subscribe()
      }
      this.confirmDialogRef = null;
    });
  }

  addNewPayment() {
    let addPaymentForm = this._matDialog.open(CreatePaymentsComponent, {
      width: '500px',
      disableClose: false
    });
    addPaymentForm.afterClosed().subscribe(result => {

      if (result) {
        this.settingsService.getPayments().subscribe((payments) => {
          this.payments = payments;
        })
      }
    });
  }


  onChange(payment: Payment, event: MatSlideToggleChange) {
    this.settingsService.updatePayment(payment._id, {active: event.checked}).subscribe(() => {
      this._matDialog
    })
  }

  public viewDetails(payment: Payment) {
    let addPaymentForm = this._matDialog.open(EditPaymentsComponent, {
      data: payment,
      width: '500px',
      disableClose: false
    });
    addPaymentForm.afterClosed().subscribe(result => {

      if (result) {
        this.settingsService.getPayments().subscribe((payments) => {
          this.payments = payments;
        })
      }
    });
  }


}
