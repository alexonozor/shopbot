import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: 'fund-requests',
        loadChildren: () => import('./fund-requests/fund-requests.module').then(m => m.FundRequestsModule),
      },
      // {
      //   path: ':id/details',
      //   component: OrdersDetailsComponent,
      //   resolve: { order: OrderResolver, commission: OrderUpdateResolver }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
