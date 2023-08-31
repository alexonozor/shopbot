import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './finance.component';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { ModalGuard } from 'src/app/shared/guard/open-modal.guard';
import { FinancesResolver } from 'src/app/shared/resolvers/finance.resolver';
const routes: Routes = [
  { 
    path: '', component: FinancesComponent,
    children: [
      { 
        path: 'list', 
        component: FinanceListComponent,
        // resolve: { finances: FinancesResolver }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
