import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MerchantsService } from 'src/app/shared/services/merchant.service';
import { Merchant } from 'src/app/shared/models/merchant';
import { Location } from '@angular/common';


@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
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
