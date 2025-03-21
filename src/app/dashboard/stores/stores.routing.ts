import { Routes } from '@angular/router';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { StoresService } from './stores.service';
import { CategoriesResolver } from '../../shared/resolvers/categories.resolver';
import {  merchantsResolver } from 'src/app/shared/resolvers/merchants.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { StoreResolver } from 'src/app/shared/resolvers/store.resolver';

export const STORE_ROUTING: Routes = [
  {
    path: 'list',
    component: ListStoresComponent,
    resolve: {
      data: StoresService,
      merchants: merchantsResolver,
      categories: CategoriesResolver,
    }
  },
  {
    path: ':id',
    loadChildren: () => import('./details/store-tab.routing').then(m => m.STORE_ROUTE),
    resolve: {
      store: StoreResolver,
      categories: CategoriesResolver,
      merchants: merchantsResolver,
      deliveryZones: DeliveryZonesResolver,
    }
  },
  {
    path: '**',
    redirectTo: 'list',
  }
];

