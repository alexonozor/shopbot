import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  content: string; 
  confirmButton: string;
}

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.scss']
})
export class WhatsAppComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  
  ngOnInit() {
    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close(true);
  }

  send(number, text) {
    window.open(`https://api.whatsapp.com/send?phone=${number}&text=${text}`, '_blank');
  }

}
