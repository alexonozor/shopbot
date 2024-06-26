import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { StoreService } from './details/store.service';
import { StoresService } from './stores.service';
import { MenuDetailsComponent } from './details/menu-details/menu-details.component';
import { MenuService } from '../../shared/services/menu.service';
import { CategoriesResolver } from '../../shared/resolvers/categories.resolver';
import { MerchantResolver, MerchantsResolver } from 'src/app/shared/resolvers/merchants.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { StoreResolver } from 'src/app/shared/resolvers/store.resolver';

const routes: Routes = [
  {
    path: 'list',
    component: ListStoresComponent,
    resolve: {
      data: StoresService,
      merchants: MerchantsResolver,
      categories: CategoriesResolver,
    }
  },
  {
    path: ':id',
    loadChildren: () => import('./details/store-tab.routing').then(m => m.STORE_ROUTE),
    resolve: {
      store: StoreResolver,
      categories: CategoriesResolver,
      merchants: MerchantsResolver,
      deliveryZones: DeliveryZonesResolver,
    }
  },
  {
    path: '**',
    redirectTo: 'list',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
