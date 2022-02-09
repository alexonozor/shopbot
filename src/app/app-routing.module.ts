import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }