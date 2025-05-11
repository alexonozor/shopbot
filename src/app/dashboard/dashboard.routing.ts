import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { Role } from '../shared/models/role';
import { RoleGuard } from '../shared/guard/authorisation.guard';
import { DeliveryZonesResolver } from '../shared/resolvers/delivery-zones.resolver';


export const DASHBOARD_ROUTE: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent,
        resolve: { deliveries: DeliveryZonesResolver }
      },
      {
        path: 'stores',
        loadChildren: () => import('./stores/stores.routing').then(m => m.STORE_ROUTING),
        // canActivate: [AdminGuard]
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Producer, Role.Marketer] }
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.routing').then(m => m.CUSTOMERS_ROUTING),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.routing').then(m => m.CATEGORIES_ROUTING),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin] }
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin] }
      },

      {
        path: 'promos',
        loadChildren: () => import('./promos/promos.module').then(m => m.PromosModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin] }
      },

      {
        path: 'delivery-zones',
        loadChildren: () => import('./delivery-zones/delivery-zones.routing').then(m => m.DELIVERY_ZONE_ROUTING),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin] }
      },

      {
        path: 'cuisines',
        loadChildren: () => import('./cuisines/cuisines.routing').then(m => m.CUISINES_ROUTE),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin] }
      },

      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },
      {
        path: 'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },

      {
        path: 'merchants',
        loadChildren: () => import('./merchants/merchants.routing').then(m => m.MERCHANTS_ROUTING),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },

      {
        path: 'riders',
        loadChildren: () => import('./riders/riders.module').then(m => m.RiderModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },

      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },

      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },
      {
        path: 'roles-permissions',
        loadChildren: () => import('./roles-and-permissions/roles-and-permissions.module').then(m => m.RolesAndPermissionsModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin] }
      },
      {
        path: 'banners',
        loadChildren: () => import('./banners/banners.routing').then(m => m.BANNER_ROUTING),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin, Role.Admin, Role.Marketer] }
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.routing').then(m => m.SETTINGS_ROUTE),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.SuperAdmin] }
      },
      
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  },
];
