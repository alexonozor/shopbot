import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawalsComponent } from './withdrawals.component';
import { WithdrawalListComponent } from './withdrawal-list/withdrawal-list.component';
import { TransferResolver, TransfersResolver } from '../../../shared/resolvers/transfers.resolver';
import { WithdrawalDetailsComponent } from './withdrawal-details/withdrawal-details.component';

const routes: Routes = [
  { 
    path: '', component: WithdrawalsComponent,
    children: [
      { 
        path: 'list', 
        component: WithdrawalListComponent,
        resolve: { transfers: TransfersResolver }
      },
      { 
        path: ':id/details', 
        
        component: WithdrawalDetailsComponent,
        resolve: { transfer: TransferResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawalsRoutingModule { }
