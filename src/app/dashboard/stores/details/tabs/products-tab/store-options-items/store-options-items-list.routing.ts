import { Routes } from '@angular/router';
import { StoreOptionsItemsListComponent } from './store-options-items-list/store-options-items-list.component';

export const STORE_OPTIONS_ITEMS_ROUTE: Routes = [
  {
    path: 'list',
    component: StoreOptionsItemsListComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];


