import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutsComponent } from './payouts.component';
import { PayoutsListComponent } from './payouts-list/payouts-list.component';
import { TransactionsResolver, TransactionResolver } from '../../../shared/resolvers/transactions.resolver';
import { PayoutsDetailsComponent } from './payouts-details/payouts-details.component';
import { ModalGuard } from 'src/app/shared/guard/open-modal.guard';
const routes: Routes = [
  { 
    path: '', component: PayoutsComponent,
    children: [
      { 
        path: 'list', 
        component: PayoutsListComponent,
        resolve: { transactions: TransactionsResolver }
      },
      { 
        path: ':id/details', 
        
        component: PayoutsDetailsComponent,
        resolve: { transaction: TransactionResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutsRoutingModule { }
