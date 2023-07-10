import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryZonesResolver, DeliveryZoneResolver } from '../../shared/resolvers/delivery-zones.resolver';
import { CreateDeliveryZoneComponent } from './create-delivery-zone/create-delivery-zone.component';
import { DeliveryZonesComponent } from './delivery-zones.component';
import { EditDeliveryZoneComponent } from './edit-delivery-zone/edit-delivery-zone.component';
import { ListDeliveryZonesComponent } from './list-delivery-zones/list-delivery-zones.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryZonesComponent,
    children: [
      {
        path: 'list',
        component: ListDeliveryZonesComponent,
        resolve: { deliveries: DeliveryZonesResolver }
      },
      {
        path: 'new',
        component: CreateDeliveryZoneComponent
      },
      {
        path: ':id/details',
        component: EditDeliveryZoneComponent,
        resolve: { delivery: DeliveryZoneResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class DeliveryZonesRoutingModule { }
