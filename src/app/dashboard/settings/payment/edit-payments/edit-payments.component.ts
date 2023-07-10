import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { Payment } from 'src/app/shared/models/payment';

@Component({
  selector: 'app-edit-payments',
  templateUrl: './edit-payments.component.html',
  styleUrls: ['./edit-payments.component.scss']
})
export class EditPaymentsComponent implements OnInit {
  paymentForm!: FormGroup;
  isLoading: boolean = false;
  payment!: Payment

  constructor(
    private _formBuilder: FormBuilder,
    private settingsService: SettingsService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { 
      this.payment = data
    }

  ngOnInit() {
    this.paymentForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      id: [this.payment.id, Validators.required],
      image: [this.payment.image, Validators.required],
      name: [this.payment.name, Validators.required],
      region: [this.payment.region],
      secretKey: [this.payment.secretKey],
      publicKey: [this.payment.publicKey],
      active: [this.payment.active, Validators.required],
      description: [this.payment.description, Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.settingsService.updatePayment(this.payment._id, this.paymentForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      this.dialogRef.close(true);
    })
  }
}
