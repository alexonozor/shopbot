import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlocksComponent } from './create-blocks/create-blocks.component';
import { EditBlocksComponent } from './edit-blocks/edit-blocks.component';
import { ListBlocksComponent } from './list-blocks/list-blocks.component';
import { BlocksResolver } from '../../../shared/resolvers/settings.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';


export const BLOCK_ROUTING: Routes = [
  {
    path: '',
    component: ListBlocksComponent,
    resolve: { blocks: BlocksResolver, zones: DeliveryZonesResolver }
  },
  {
    path: 'create',
    component: CreateBlocksComponent,
    resolve: { deliveries: DeliveryZonesResolver }
  },
  {
    path: ':id/edit',
    component: EditBlocksComponent,
    resolve: { block: BlocksResolver, deliveries: DeliveryZonesResolver }
  },
];
