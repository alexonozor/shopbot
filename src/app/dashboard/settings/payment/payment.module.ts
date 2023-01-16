import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { CreatePaymentsComponent } from './create-payments/create-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { MaterialModule } from '../../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../../shared/services/settings.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListPaymentsComponent,
    CreatePaymentsComponent,
    EditPaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    SettingsService
  ]
})
export class PaymentModule { }
