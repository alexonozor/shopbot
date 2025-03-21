import { CreatePaymentsComponent } from './create-payments/create-payments.component';
import { EditPaymentsComponent } from './edit-payments/edit-payments.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { PaymentsResolver } from '../../../shared/resolvers/settings.resolver';
import { Routes } from '@angular/router';


export const PAYMENT_ROUTING: Routes = [
  {
    path: '',
    component: ListPaymentsComponent,
    resolve: { payments: PaymentsResolver }
  },
  {
    path: 'create',
    component: CreatePaymentsComponent,
  },
  {
    path: ':id/edit',
    component: EditPaymentsComponent,
    resolve: { payment: PaymentsResolver }
  },
];

