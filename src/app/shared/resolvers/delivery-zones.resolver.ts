import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DeliveryZoneService } from '../services/delivery-zone.service';
import { DeliveryZone } from '../models/delivery-zone';

@Injectable({
  providedIn: 'root'
})

export class DeliveryZonesResolver implements Resolve<DeliveryZone[]> {
  constructor(private deliveryService: DeliveryZoneService) {}

  resolve(): Observable<DeliveryZone[]> {
    return this.deliveryService.getDeliveryZones();
  }
}


@Injectable({
  providedIn: 'root'
})

export class DeliveryZoneResolver implements Resolve<DeliveryZone> {
  constructor(private deliveryService: DeliveryZoneService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<DeliveryZone> {
    const id = route.paramMap.get('id')
    return this.deliveryService.getDeliveryZone(id);
  }
}