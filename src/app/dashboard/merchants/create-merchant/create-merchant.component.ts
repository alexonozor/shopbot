import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { AdminService } from '../../../shared/services/admin.service';
import { CommonModule, Location } from '@angular/common';
import { RolesAndPermission } from '../../../shared/models/roles-and-permission';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Merchant } from 'src/app/shared/models/merchant';
import { MerchantsService } from 'src/app/shared/services/merchant.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-merchant',
  templateUrl: './create-merchant.component.html',
  styleUrls: ['./create-merchant.component.scss'],
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
export class CreateMerchantComponent implements OnInit {
 
  merchantForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private merchantService: MerchantsService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.merchantForm.valid) {
      this.merchantService.createMerchant(this.merchantForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
