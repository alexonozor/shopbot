import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRequestsRoutingModule } from './fund-requests-routing.module';
import { FundRequestsComponent } from './fund-requests.component';
import { FundRequestsResolver, FundRequestResolver } from 'src/app/shared/resolvers/fund-requests.resolver';
import { FundRequestsService } from 'src/app/shared/services/fund-request.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FundRequestsListComponent } from './fund-requests-list/fund-requests-list.component';
import { NewFundRequestsComponent } from './new-fund-requests/new-fund-requests.component';
import { EditFundRequestsComponent } from './edit-fund-requests/edit-fund-requests.component';
import { DeliveryZonesResolver, DeliveryZoneResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';

@NgModule({
  declarations: [
    FundRequestsComponent,
    FundRequestsListComponent,
    NewFundRequestsComponent,
    EditFundRequestsComponent
  ],
  imports: [
    CommonModule,
    FundRequestsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    FundRequestsResolver,
    FundRequestsService,
    FundRequestResolver,
    DeliveryZonesResolver, 
    DeliveryZoneResolver, 
    DeliveryZoneService,
  ]
})
export class FundRequestsModule { }
