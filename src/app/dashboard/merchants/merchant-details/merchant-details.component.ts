import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MerchantsService } from 'src/app/shared/services/merchant.service';
import { Merchant } from 'src/app/shared/models/merchant';
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule
  ]
})
export class MerchantDetailsComponent implements OnInit {

  merchantForm: FormGroup;
  merchant: Merchant

  constructor(
    private fb: FormBuilder,
    private merchantService: MerchantsService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.merchant = this.route.snapshot.data['merchant'] as Merchant;
    
    this.merchantForm = this.fb.group({
      name: [this.merchant.name, Validators.required],
      phoneNumber: [this.merchant.phoneNumber, Validators.required],
      gender: [this.merchant.gender, Validators.required],
      email: [this.merchant.email, Validators.email]
    })
  }

  ngOnInit(): void {}

  submit() {
    if (this.merchantForm.valid) {
      this.merchantService.updateMerchant(this.merchant._id, this.merchantForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
