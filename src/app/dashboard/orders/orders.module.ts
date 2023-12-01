import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import {
  OrderResolver,
  OrdersResolver,
  OrderUpdateResolver,
  OrdersCountResolver
} from '../../shared/resolvers/orders.resolver';
import { OrdersService } from '../../shared/services/order.service';
import { GravatarDirective } from 'src/app/shared/pipes/gravatar.directive';

@NgModule({
  declarations: [
    OrdersComponent, 
    ListOrdersComponent, 
    OrdersDetailsComponent, 
    GravatarDirective
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    OrdersResolver,
    OrderResolver,
    OrdersService,
    OrderUpdateResolver,
    OrdersCountResolver
  ],
})
export class OrdersModule {}
