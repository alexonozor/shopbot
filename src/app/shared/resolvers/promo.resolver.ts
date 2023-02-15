import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Promo } from '../models/promo';
import { PromosService } from '../services/promo.service';

@Injectable({
  providedIn: 'root'
})

export class PromosResolver implements Resolve<Promo[]> {
  constructor(private promoService: PromosService) {}

  resolve(): Observable<Promo[]> {
    return this.promoService.getPromos();
  }
}


@Injectable({
  providedIn: 'root'
})

export class PromoResolver implements Resolve<Promo> {
  constructor(private promoService: PromosService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Promo> {
    const id = route.paramMap.get('id')
    return this.promoService.getPromo(id);
  }
}