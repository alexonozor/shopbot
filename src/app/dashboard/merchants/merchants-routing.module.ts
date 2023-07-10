import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantComponent } from './merchants.component';
import { ListMerchantComponent } from './list-merchant/list-merchant.component';
import { CreateMerchantComponent } from './create-merchant/create-merchant.component';
import { MerchantResolver, MerchantsResolver } from '../../shared/resolvers/merchants.resolver';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      {
        path: 'list',
        component: ListMerchantComponent,
        resolve: { merchants: MerchantsResolver }
      },
      {
        path: 'new',
        component: CreateMerchantComponent
        // resolve: { roles: MerchantsResolver  }
      },
      {
        path: ':id/details',
        component: MerchantDetailsComponent,
        resolve: { merchant: MerchantResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
