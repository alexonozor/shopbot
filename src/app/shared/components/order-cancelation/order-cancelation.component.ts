import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  title: string;
  content: string;
  confirmButton: string;
}

@Component({
  selector: 'app-order-cancelation',
  templateUrl: './order-cancelation.component.html',
  styleUrls: ['./order-cancelation.component.scss']
})
export class OrderCancelationComponent implements OnInit {
  public title: string = ''
  public confirmMessage: string = '';
  public confirmButton: string = '';
  public cancellationText: string = '';
  public vendorIssue: boolean = false;
  public cancellationReasons: any[] = [
    { text: 'Customer change of mind', vendorIssue: false},
    { text: 'Customer found a better deal', vendorIssue: false},
    { text: 'Item out of stock', vendorIssue: true },
    { text: 'Restaurant is closed', vendorIssue: true },
    { text: 'Delivery Issues', vendorIssue: false },
    { text: 'Unable to reach the customer', vendorIssue: false },
    { text: 'Unable to reach the Vendor',  vendorIssue: true },
    { text: 'Payment Issues', vendorIssue: false },
    { text: 'Others', vendorIssue: false }
  ];

  constructor(
    public dialogRef: MatDialogRef<OrderCancelationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public snackbar: MatSnackBar
  ) { }


  ngOnInit() {}

  closeDialog(data: any) {
    if (!data) {
      return;
    }
    if (data.text === 'Others') {
      if (this.cancellationText.length > 2) {
        this.dialogRef.close({text: this.cancellationText, vendorIssue: this.vendorIssue});
      } else {
        this.snackbar.open('Please tell us why!', 'Ok', { duration: 3000 })
      }
    } else {
      this.dialogRef.close(data);
    }
  }
}
