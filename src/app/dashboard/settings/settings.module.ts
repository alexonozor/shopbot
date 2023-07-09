import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { PaymentComponent } from './payment/payment.component';
import { MaterialModule } from 'src/app/material';
import { PaymentResolver, PaymentsResolver, VersionResolver } from 'src/app/shared/resolvers/settings.resolver';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { VersionSettingsComponent } from './version-settings/version-settings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent,
    PaymentComponent,
    VersionSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    PaymentResolver,
    PaymentsResolver,
    SettingsService,
    VersionResolver
  ]
})
export class SettingsModule { }
