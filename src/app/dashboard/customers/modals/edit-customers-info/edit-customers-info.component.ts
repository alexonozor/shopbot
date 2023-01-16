import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/components/confirm/confirm.component';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-customers-info',
  templateUrl: './edit-customers-info.component.html',
  styleUrls: ['./edit-customers-info.component.scss']
})
export class EditCustomersInfoComponent implements OnInit {

  customerForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    public dialogRef: MatDialogRef<EditCustomersInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { 
  
    this.customerForm = this.fb.group({
      name: [this.data.name, Validators.required],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      gender: [this.data.gender, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      language: [this.data.language],
      country: [this.data.country]
    });
  }

  ngOnInit(): void {
    console.log(this.data)
  }


  submit() {
    if (this.customerForm.valid) {
      this.userService.updateUser(this.data._id, this.customerForm.getRawValue()).subscribe((data) => {
        this.dialogRef.close(this.customerForm.getRawValue())
      })
    }
  }

}
