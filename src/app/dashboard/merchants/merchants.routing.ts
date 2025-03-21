import { MerchantComponent } from './merchants.component';
import { ListMerchantComponent } from './list-merchant/list-merchant.component';
import { CreateMerchantComponent } from './create-merchant/create-merchant.component';
import { merchantResolver, merchantsResolver } from '../../shared/resolvers/merchants.resolver';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { Routes } from '@angular/router';

export const MERCHANTS_ROUTING: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      {
        path: 'list',
        component: ListMerchantComponent,
        resolve: { merchants: merchantsResolver }
      },
      {
        path: 'new',
        component: CreateMerchantComponent
        // resolve: { roles: MerchantsResolver  }
      },
      {
        path: ':id/details',
        component: MerchantDetailsComponent,
        resolve: { merchant: merchantResolver }
      }      
    ]
  }
];

