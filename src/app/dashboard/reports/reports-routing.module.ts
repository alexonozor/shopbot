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
      { 
        path: 'payouts', 
        loadChildren: () => import('./payouts/payouts.module').then(m => m.PayoutsModule)
      },
      { 
        path: 'withdrawals', 
        loadChildren: () => import('./withdrawals/withdrawals.module').then(m => m.WithdrawalsModule)
      },
      { 
        path: 'finances', 
        loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
