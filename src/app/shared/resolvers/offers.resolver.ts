import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';
import { OffersService } from '../services/offers.service';

@Injectable({
  providedIn: 'root'
})

export class OffersResolver implements Resolve<Offer[]> {
  constructor(private offersService: OffersService) {}

  resolve(): Observable<Offer[]> {
    return this.offersService.getOffers();
  }
}


@Injectable({
  providedIn: 'root'
})

export class OfferResolver implements Resolve<Offer> {
  constructor(private offerService: OffersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Offer> {
    const id = route.paramMap.get('id')
    return this.offerService.getOffer(id);
  }
}
