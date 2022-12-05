import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guard/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
// import { AdminGuard } from '../shared/guard/admin.guard';


const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        // canActivate: [AuthGuard],
        component: HomeComponent,
      },
      {
        path: 'stores',
        loadChildren: () => import('./stores/stores.module').then(m => m.StoresModule),
        // canActivate: [AdminGuard]
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
        // canActivate: [AdminGuard]
      },

      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
        // canActivate: [AdminGuard]
      },

      {
        path: 'cuisines',
        loadChildren: () => import('./cuisines/cuisines.module').then(m => m.CuisinesModule)
        // canActivate: [AdminGuard]
      },

      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
        // canActivate: [AdminGuard]
      },

      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
        // canActivate: [AdminGuard]
      },
      {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
        // canActivate: [AdminGuard]
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
