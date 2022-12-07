import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { Role } from '../shared/models/role';
import { RoleGuard } from '../shared/guard/authorisation.guard';


const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent,
      },
      {
        path: 'stores',
        loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule),
        // canActivate: [AdminGuard]
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin, Role.Producer, Role.Marketer] }
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin, Role.Marketer] }
      },

      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin] }
      },

      {
        path: 'cuisines',
        loadChildren: () => import('./cuisines/cuisines.module').then(m => m.CuisinesModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin, Role.Producer] }
      },

      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin, Role.Marketer] }
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
        data: { roles: [Role.Admin, Role.Marketer] }
      },
      {
        path: 'roles-permissions',
        loadChildren: () => import('./roles-and-permissions/roles-and-permissions.module').then(m => m.RolesAndPermissionsModule),
        canActivate: [AuthGuard, RoleGuard],
        data: { roles: [Role.Admin] }
      },
      
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }