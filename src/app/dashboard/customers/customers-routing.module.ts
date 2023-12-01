import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCountResolver, UserResolver, UsersResolver } from 'src/app/shared/resolvers/customers.resolver';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { CustomerDetails } from '../../shared/models/auth';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent,
    children: [
      {
        path: 'list',
        component: ListCustomersComponent,
        resolve: { customers: UsersResolver, deliveries: DeliveryZonesResolver, count: UserCountResolver }
      },
      {
        path: ':id/details',
        component: CustomersDetailsComponent,
        resolve: { customer: UserResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class CustomersRoutingModule { }
