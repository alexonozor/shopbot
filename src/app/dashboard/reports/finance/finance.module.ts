import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinancesComponent } from './finance.component';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { TransactionsService } from '../../../shared/services/transaction.service';
import { TransactionsResolver, TransactionResolver } from 'src/app/shared/resolvers/transactions.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { FinancesService } from 'src/app/shared/services/finance.service';
import { FinancesResolver } from 'src/app/shared/resolvers/finance.resolver';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';
import { DeliveryZoneResolver, DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';

@NgModule({
  declarations: [
    FinancesComponent,
    FinanceListComponent,
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatDatepickerModule
  ],
  providers: [
    FinancesService,
    FinancesResolver,
    DeliveryZonesResolver, 
    DeliveryZoneResolver, 
    DeliveryZoneService,
  ]
})
export class FinanceModule { }
