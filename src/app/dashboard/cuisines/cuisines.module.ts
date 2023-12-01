import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisinesRoutingModule } from './cuisines-routing.module';
import { CuisinesComponent } from './cuisines.component';
import { ListCuisinesComponent } from './list-cuisines/list-cuisines.component';
import { CreateCuisinesComponent } from './create-cuisines/create-cuisines.component';
import { CuisinesService } from '../../shared/services/cuisines.service';
import { CuisinesResolver, CuisineResolver } from 'src/app/shared/resolvers/cuisines.resolver';
import { CuisinesDetailsComponent } from './cuisines-details/cuisines-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';


@NgModule({
  declarations: [
    CuisinesComponent,
    ListCuisinesComponent,
    CreateCuisinesComponent,
    CuisinesDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    CuisinesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CuisinesResolver, CuisineResolver, CuisinesService, DeliveryZonesResolver, DeliveryZoneService]
})
export class CuisinesModule { }
