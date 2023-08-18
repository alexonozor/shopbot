import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './banners.component';
import { ListBannersComponent } from './list-banners/list-banners.component';
import { EditBannersComponent } from './edit-banners/edit-banners.component';
import { CreateBannersComponent } from './create-banners/create-banners.component';
import { BannerResolver, BannersResolver } from 'src/app/shared/resolvers/banners.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';

const routes: Routes = [
  {
    path: '',
    component: BannersComponent,
    children: [
      {
        path: 'list',
        component: ListBannersComponent,
        resolve: { banners: BannersResolver }
      },
      {
        path: 'new',
        component: CreateBannersComponent,
        resolve: { deliveryZones: DeliveryZonesResolver }
      },
      {
        path: ':id/edit',
        component: EditBannersComponent,
        resolve: { banner: BannerResolver, deliveryZones: DeliveryZonesResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  


exports: [RouterModule]
})
export class BannersRoutingModule { }
