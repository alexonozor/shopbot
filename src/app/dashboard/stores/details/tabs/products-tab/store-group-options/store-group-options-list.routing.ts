import { Routes } from '@angular/router';
import { StoreGroupOptionListComponent } from './store-group-options-list/store-group-options-list.component';


export const STORE_GROUP_OPTIONS_ROUTE: Routes = [
  {
    path: 'list',
    component: StoreGroupOptionListComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];


