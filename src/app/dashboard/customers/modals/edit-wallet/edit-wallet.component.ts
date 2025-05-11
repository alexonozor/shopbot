import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from 'src/app/shared/components/confirm/confirm.component';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class EditWalletComponent implements OnInit {

  customerForm!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    public dialogRef: MatDialogRef<EditWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { 
    this.customerForm = this.fb.group({
      walletBallance: [this.data.walletBallance | 0, Validators.required],
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
