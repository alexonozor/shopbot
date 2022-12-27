import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
 
    {
      path: 'payments',
      loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
    },
    // children: [
    //   {
    //     path: 'list',
    //     component: ListOrdersComponent,
    //     resolve: { orders: OrdersResolver }
    //   },
    //   {
    //     path: ':id/details',
    //     component: OrdersDetailsComponent,
    //     resolve: { order: OrderResolver }
    //   }
    // ]
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SettingsRoutingModule { }
