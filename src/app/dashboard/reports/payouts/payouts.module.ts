import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayoutsRoutingModule } from './payouts-routing.module';
import { PayoutsComponent } from './payouts.component';
import { PayoutsListComponent } from './payouts-list/payouts-list.component';
import { PayoutsDetailsComponent } from './payouts-details/payouts-details.component';
import { TransactionsService } from '../../../shared/services/transaction.service';
import { TransactionsResolver, TransactionResolver } from 'src/app/shared/resolvers/transactions.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ModalGuard } from 'src/app/shared/guard/open-modal.guard';

@NgModule({
    imports: [
    CommonModule,
    PayoutsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    PayoutsComponent,
    PayoutsListComponent,
    PayoutsDetailsComponent
],
    providers: [
        TransactionsService,
        TransactionsResolver,
        TransactionResolver,
        ModalGuard
    ]
})
export class PayoutsModule { }
