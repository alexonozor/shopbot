import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrderResolver, OrdersResolver, OrdersCountResolver } from '../../shared/resolvers/orders.resolver';
import { RidersResolver } from 'src/app/shared/resolvers/riders.resolver';


const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'list',
        component: ListOrdersComponent,
        resolve: { orders: OrdersResolver, totalOrders: OrdersCountResolver }
      },
      {
        path: ':id/details',
        component: OrdersDetailsComponent,
        resolve: { order: OrderResolver, riders: RidersResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],


exports: [RouterModule]
})
export class OrdersRoutingModule { }
