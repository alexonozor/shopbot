import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { finalize } from 'rxjs';
import { StoresService } from 'src/app/dashboard/stores/stores.service';
import { AuthService } from 'src/app/shared/services';
import { SettingsService } from 'src/app/shared/services/settings.service';


@Component({
  selector: 'app-create-payments',
  templateUrl: './create-payments.component.html',
  styleUrls: ['./create-payments.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
  ]
})
export class CreatePaymentsComponent implements OnInit {

  paymentForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private settingsService: SettingsService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit() {
    this.paymentForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      id: ['', Validators.required],
      image: ['', Validators.required],
      name: ['', Validators.required],
      secretKey: [],
      publicKey: [],
      region: [],
      active: [false, Validators.required],
      description: ['', Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.settingsService.createPayment(this.paymentForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      this.dialogRef.close(true);
    })
  }

}
