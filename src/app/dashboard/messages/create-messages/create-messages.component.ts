import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/components/comfirm/confirm.component';
import { NotificationsService } from '../../../shared/services/notifications.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEvent, MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.scss']
})
export class CreateMessagesComponent implements OnInit {

  messagesForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    recipients: this.fb.array([]),
    type: ['', Validators.required],
    recipientsType: [''],
  });

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  recipientsData: any[] = [];


  constructor(
    private fb: FormBuilder,
    private notificationsService: NotificationsService,
    public dialogRef: MatDialogRef<CreateMessagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   
  }

  ngOnInit(): void {
   if (!this.data.allCustomers)  {
    if(this.data.isBulkMsg) {
      this.recipientsData = this.data.customers;
      this.recipientsData.forEach((data) => { 
        if (data.phoneCredentials.length > 0) {
          this.addRecipients(data) 
        }
      })
    } else {
     this.recipientsData.push(this.data.customers)
     this.recipientsData.map((data) => this.addRecipients(data))
    }
   }
  }

 get recipients(): FormArray {
    return this.messagesForm.controls["recipients"] as FormArray;
 }


 addRecipients(data:any) {
  const recipientsForm = this.fb.group({
    name: [data.name],
    id: [data._id],
    phoneToken: [data.phoneCredentials]
  });
  this.recipients.push(recipientsForm);
}


 deleteRecipient(recipientIndex: number) {
  this.recipients.removeAt(recipientIndex);
 }


 submit() {
  this.notificationsService.createNotification(this.messagesForm.getRawValue()).subscribe((data) => {
    this.dialogRef.close(data);
  })
 }


 add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  // Add our fruit
  if (value) {
    this.recipientsData.push({name: value});
  }

  // Clear the input value
  event.chipInput!.clear();
}

remove(fruit: any): void {
  const index = this.recipientsData.indexOf(fruit);

  if (index >= 0) {
    this.recipientsData.splice(index, 1);
  }
}

edit(fruit: any, event: any) {
  const value = event.value.trim();

  // Remove fruit if it no longer has a name
  if (!value) {
    this.remove(fruit);
    return;
  }

  // Edit existing fruit
  const index = this.recipientsData.indexOf(fruit);
  if (index > 0) {
    this.recipientsData[index].name = value;
  }
}

}
