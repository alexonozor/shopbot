import { Routes } from '@angular/router';
import { StoreProductComponent } from './products.component';

export const PRODUCT_TAB_ROUTE: Routes = [
  {
    path: 'tabs',
    component: StoreProductComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('./categories/product-category.routing').then(m => m.PRODUCT_CATEGORY_ROUTE)
      },
      {
        path: 'products',
        loadChildren: () => import('./store-products/store-products.routing').then(m => m.STORE_PRODUCTS_ROUTE)
      },
      {
        path: 'group-options',
        loadChildren: () => import('./store-group-options/store-group-options-list.routing').then(m => m.STORE_GROUP_OPTIONS_ROUTE)
      },
      {
        path: 'options',
        loadChildren: () => import('./store-options-items/store-options-items-list.routing').then(m => m.STORE_OPTIONS_ITEMS_ROUTE)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'categories',
      }
    ]
    
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'tabs',
  }
  
];


