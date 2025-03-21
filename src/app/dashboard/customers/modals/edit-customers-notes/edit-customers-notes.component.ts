import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { EditCustomersInfoComponent } from '../edit-customers-info/edit-customers-info.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-edit-customers-notes',
  templateUrl: './edit-customers-notes.component.html',
  styleUrls: ['./edit-customers-notes.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class EditCustomersNotesComponent implements OnInit {

  customerForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    public dialogRef: MatDialogRef<EditCustomersNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { 
  
    this.customerForm = this.fb.group({
      notes: [this.data.notes]
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
