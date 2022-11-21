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
