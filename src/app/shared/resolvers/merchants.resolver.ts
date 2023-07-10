import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Merchant } from '../models/merchant';
import { MerchantsService } from '../services/merchant.service';


@Injectable({
  providedIn: 'root'
})
export class MerchantsResolver implements Resolve<Merchant[]> {
  constructor(private merchantService: MerchantsService) {}
  resolve(): Observable<Merchant[]> {
    return this.merchantService.getMerchants();
  }
}


@Injectable({
  providedIn: 'root'
})
export class MerchantResolver implements Resolve<Merchant> {
  constructor(private merchantService: MerchantsService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Merchant> {
    const id = route.paramMap.get('id');
    return this.merchantService.getMerchant(id);
  }
}