import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { EditCustomersInfoComponent } from '../edit-customers-info/edit-customers-info.component';

@Component({
  selector: 'app-edit-customers-marketing-status',
  templateUrl: './edit-customers-marketing-status.component.html',
  styleUrls: ['./edit-customers-marketing-status.component.scss']
})
export class EditCustomersMarketingStatusComponent implements OnInit {

  customerForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    public dialogRef: MatDialogRef<EditCustomersMarketingStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { 
  
    this.customerForm = this.fb.group({
      allowNotifications: [this.data.allowNotifications, Validators.required],
      allowSalesNotifications: [this.data.allowSalesNotifications, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  submit() {
    if (this.customerForm.valid) {
      this.userService.updateUser(this.data._id, this.customerForm.getRawValue()).subscribe((data) => {
        this.dialogRef.close(this.customerForm.getRawValue())
      })
    }
  }

}
