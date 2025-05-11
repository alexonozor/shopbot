import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithdrawalsRoutingModule } from './withdrawals-routing.module';
import { WithdrawalsComponent } from './withdrawals.component';
import { WithdrawalListComponent } from './withdrawal-list/withdrawal-list.component';
import { WithdrawalDetailsComponent } from './withdrawal-details/withdrawal-details.component';
import { TransfersService } from '../../../shared/services/transfer.service';
import {
  TransfersResolver,
  TransferResolver,
} from 'src/app/shared/resolvers/transfers.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    imports: [
    CommonModule,
    WithdrawalsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    WithdrawalsComponent, WithdrawalListComponent, WithdrawalDetailsComponent,
],
    providers: [TransfersService, TransfersResolver, TransferResolver],
})
export class WithdrawalsModule {}
