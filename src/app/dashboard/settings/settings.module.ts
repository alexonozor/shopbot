import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PaymentComponent } from './payment/payment.component';
import { MaterialModule } from 'src/app/material';
import { PaymentResolver, PaymentsResolver } from 'src/app/shared/resolvers/settings.resolver';
import { SettingsService } from 'src/app/shared/services/settings.service';


@NgModule({
  declarations: [
    SettingsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule
  ],
  providers: [
    PaymentResolver,
    PaymentsResolver,
    SettingsService
  ]
})
export class SettingsModule { }
