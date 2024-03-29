import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { OrdersService } from '../services/order.service';

@Injectable({
  providedIn: 'root'
})

export class OrdersResolver implements Resolve<Order[]> {
  constructor(private orderService: OrdersService) {}

  resolve(): Observable<Order[]> {
    return this.orderService.getOrders({
      data: {$match:{}},
      control:[{$sort:{'createdAt': -1}},{$limit:20},{$skip:0}] 
     });
  }
}

@Injectable({
  providedIn: 'root'
})

export class OrdersCountResolver implements Resolve<number> {
  constructor(private orderService: OrdersService) {}
  resolve(): Observable<number> {
    return this.orderService.countOrders();
  }
}







@Injectable({
  providedIn: 'root'
})

export class OrderResolver implements Resolve<Order> {
  constructor(private orderService: OrdersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Order> {
    const id = route.paramMap.get('id')
    return this.orderService.getOrder(id);
  }
}


@Injectable({
  providedIn: 'root'
})

export class OrderUpdateResolver implements Resolve<any> {
  constructor(private orderService: OrdersService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD hh:mm');  
    return this.orderService.updateOrderCommission({startDate: startOfMonth, endDate: endOfMonth })
  }
}
