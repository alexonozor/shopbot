import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/components/confirm/confirm.component';
import { NotificationsService } from '../../../shared/services/notifications.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.scss'],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class CreateMessagesComponent implements OnInit {

  messagesForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    recipients: this.fb.array([]),
    type: [''],
    recipientsType: [''],
    countries: [''],
  });

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  recipientsData: any[] = [];
  deliveries: DeliveryZone[]


  constructor(
    private fb: FormBuilder,
    private notificationsService: NotificationsService,
    public dialogRef: MatDialogRef<CreateMessagesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public route: ActivatedRoute
  ) {
    this.deliveries = data.deliveries as DeliveryZone[];
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
      // console.log(this.data.customers)
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
  if (this.recipients.length < 1 && !this.data.allCustomers) {
    this.dialogRef.close();
  }
 }


 submit() {
  this.notificationsService.createNotification(this.messagesForm.getRawValue()).subscribe((data) => {
    this.dialogRef.close(data);
  })
 }


//  add(event: MatChipInputEvent): void {
//   const value = (event.value || '').trim();

//   // Add our fruit
//   if (value) {
//     this.recipientsData.push({name: value});
//   }

//   // Clear the input value
//   event.chipInput!.clear();
// }

remove(recipient: any, i:number): void {
  const index = this.recipientsData.indexOf(recipient);

  if (index >= 0) {
    this.recipientsData.splice(index, 1);
  }
}

// edit(fruit: any, event: any) {
//   const value = event.value.trim();

//   // Remove fruit if it no longer has a name
//   if (!value) {
//     this.remove(fruit);
//     return;
//   }

//   // Edit existing fruit
//   const index = this.recipientsData.indexOf(fruit);
//   if (index > 0) {
//     this.recipientsData[index].name = value;
//   }
// }

}
