import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

 export const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
      path: '',  
      pathMatch: 'full',
      redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routing').then(m => m.DASHBOARD_ROUTE),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routing').then(m => m.AUTH_ROUTE)
  }

];
