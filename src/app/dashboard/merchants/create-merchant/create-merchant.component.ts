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
import { MatInputModule } from '@angular/material/input';

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
    RouterModule,
    MatInputModule
  ]
})
export class CreateMerchantComponent implements OnInit {
 
  merchantForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.email],
    pin: ['', [Validators.maxLength(4), Validators.minLength(4)]],
    role: ['', Validators.required],
    password: ['', Validators.required],
  });

 roles = [{name: "Admin"}, {name: "Cashier"}, {name: "Kitchen"}, {name: "Waiter"}, {name: "Courier"}, {name: "Owner"}]


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
