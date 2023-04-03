import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesResolver, CategoryResolver } from 'src/app/shared/resolvers/categories.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { DeliveryZonesComponent } from './delivery-zones.component';
import { ListDeliveryZonesComponent } from './list-delivery-zones/list-delivery-zones.component';
import { DeliveryZonesRoutingModule } from './delivery-zones-routing.module';
import { DeliveryZoneResolver, DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';
import { CreateDeliveryZoneComponent } from './create-delivery-zone/create-delivery-zone.component';
import { EditDeliveryZoneComponent } from './edit-delivery-zone/edit-delivery-zone.component';

@NgModule({
  declarations: [
    DeliveryZonesComponent,
    ListDeliveryZonesComponent,
    CreateDeliveryZoneComponent,
    EditDeliveryZoneComponent
  ],
  imports: [
    CommonModule,
    DeliveryZonesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DeliveryZonesResolver, DeliveryZoneResolver, DeliveryZoneService]
})
export class DeliveryZonesModule { }
