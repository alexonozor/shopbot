import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchants-routing.module';
import { MerchantComponent } from './merchants.component';
import { ListMerchantComponent } from './list-merchant/list-merchant.component';
import { CreateMerchantComponent } from './create-merchant/create-merchant.component';
import { MerchantsService } from '../../shared/services/merchant.service';
import { MerchantResolver, MerchantsResolver } from 'src/app/shared/resolvers/merchants.resolver';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';


@NgModule({
  declarations: [
    MerchantComponent,
    ListMerchantComponent,
    CreateMerchantComponent,
    MerchantDetailsComponent
  ],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [MerchantsResolver, MerchantResolver, MerchantsService]
})
export class MerchantModule { }
