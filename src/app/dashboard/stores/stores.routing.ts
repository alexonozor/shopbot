import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStoresComponent } from './list-stores/list-stores.component';
import { StoreComponent } from './details/store.component';
import { StoreService } from './details/store.service';
import { StoresService } from './stores.service';
import { MenuDetailsComponent } from './details/menu-details/menu-details.component';
import { MenuService } from './details/menu-details/menu.service';


const routes: Routes = [
  {
    path: 'list',
    component: ListStoresComponent,
    resolve: {
      data: StoresService
    }
  },
  {
    path: ':id/explore',
    component: StoreComponent,
    resolve: {
      data: StoreService
    }
  },
  {
    path: ':id/details/:menuId/menu',
    component: MenuDetailsComponent,
    resolve: {
      data: StoreService,
      menu: MenuService,
      
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
