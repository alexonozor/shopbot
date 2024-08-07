import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { BannersComponent } from './banners.component';
import { CreateBannersComponent } from './create-banners/create-banners.component';
import { ListBannersComponent } from './list-banners/list-banners.component';
import { EditBannersComponent } from './edit-banners/edit-banners.component';
import { BannersResolver, BannerResolver } from 'src/app/shared/resolvers/banners.resolver';
import { BannersService } from 'src/app/shared/services/banners.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material';
import { StoresRoutingModule } from '../stores/stores.routing';
import { SharedModule } from '../../shared/shared.module';
import { StoreService } from '../stores/details/store.service';
import { DeliveryZoneResolver, DeliveryZonesResolver } from '../../shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from '../../shared/services/delivery-zone.service';
@NgModule({
  declarations: [
    BannersComponent,
    CreateBannersComponent,
    ListBannersComponent,
    EditBannersComponent
  ],
  imports: [
    BannersRoutingModule,
    CommonModule,
    MaterialModule,
    StoresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    BannersResolver, 
    BannerResolver,
    BannersService,
    StoreService,
    DeliveryZonesResolver,
    DeliveryZoneResolver,
    DeliveryZoneService
  ]
})
export class BannersModule { }
