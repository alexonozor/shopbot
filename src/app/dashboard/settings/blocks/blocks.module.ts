import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockRoutingModule } from './blocks-routing.module';
import { ListBlocksComponent } from './list-blocks/list-blocks.component';
import { CreateBlocksComponent } from './create-blocks/create-blocks.component';
import { EditBlocksComponent } from './edit-blocks/edit-blocks.component';
import { MaterialModule } from '../../../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from '../../../shared/services/settings.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockComponent } from './blocks.component';
import { BlocksResolver, BlockResolver } from '../../../shared/resolvers/settings.resolver';
import { DeliveryZonesResolver, DeliveryZoneResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';


@NgModule({
  declarations: [
    ListBlocksComponent,
    CreateBlocksComponent,
    EditBlocksComponent,
    BlockComponent
  ],
  imports: [
    CommonModule,
    BlockRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    SettingsService,
    BlocksResolver,
    BlockResolver,
    DeliveryZonesResolver,
    DeliveryZoneResolver,
    DeliveryZoneService
  ]
})
export class BlockModule { }
