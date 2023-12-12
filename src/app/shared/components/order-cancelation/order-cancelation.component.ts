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
  cancellationReasons: string[] = [
    'Customer change of mind',
    'Customer found a better deal',
    'Item out of stock',
    'Restaurant is closed',
    'Delivery Issues',
    'Unable to reach the customer',
    'Unable to reach the Vendor',
    'Payment Issues',
    'Others'
  ];

  constructor(
    public dialogRef: MatDialogRef<OrderCancelationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public snackbar: MatSnackBar
  ) { }


  ngOnInit() {}

  closeDialog(data: string) {
    if (!data) {
      return;
    }
    if (data === 'Others') {
      if (this.cancellationText.length > 2) {
        this.dialogRef.close(this.cancellationText);
      } else {
        this.snackbar.open('Please tell us why!', 'Ok', { duration: 3000 })
      }
    } else {
      this.dialogRef.close(data);
    }
  }
}
