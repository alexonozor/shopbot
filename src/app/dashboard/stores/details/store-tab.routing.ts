import { Routes } from '@angular/router';
import { StoreTabComponent } from './store-tab.component';

export const STORE_ROUTE: Routes = [
  {
    path: 'tabs',
    component: StoreTabComponent,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./tabs/products-tab/products.routing').then(m => m.PRODUCT_TAB_ROUTE)
      },
      {
        path: 'general',
        loadComponent: () => import('./tabs/general-tab/general-tab.component').then(g => g.GeneralTabComponent)
      },
      {
        path: 'finance-details',
        loadComponent: () => import('./tabs/finance-details/finance-details.component').then(f => f.FinanceDetailsComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./tabs/orders/orders.component').then(f => f.OrdersComponent)
      },
      {
        path: 'business-hours',
        loadComponent: () => import('./tabs/business-hours-tab/business-hours-tab.component').then(f => f.BusinessHoursTabComponent)
      },
      {
        path: 'pickup-and-delivery',
        loadComponent: () => import('./tabs/pickup-and-delivery-tab/pickup-and-delivery-tab.component').then(f => f.PickupAndDeliveryTabComponent)
      },
      {
        path: 'cuisines',
        loadComponent: () => import('./tabs/cuisines-tab/cuisines-tab.component').then(f => f.CuisinesTabComponent)
      },
      {
        path: 'bank-account',
        loadComponent: () => import('./tabs/bank-account-tab/bank-account-tab.component').then(f => f.BankAccountTabComponent)
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'tabs',
  }
];

