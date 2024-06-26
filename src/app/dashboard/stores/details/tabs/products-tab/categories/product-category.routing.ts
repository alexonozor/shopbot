import { Routes } from '@angular/router';
import { StoreMenusComponent } from './list/menus.component';
import { StoreCategoryDetailsComponent } from './store-category-details/store-category-details.component';

export const PRODUCT_CATEGORY_ROUTE: Routes = [
  {
    path: 'list',
    component: StoreMenusComponent
  },
  {
    path: ':categoryId/details',
    loadChildren: () => import('./store-category-details/store-category-details.routing').then(m => m.STORE_CATEGORY_DETAILS_ROUTE)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];


