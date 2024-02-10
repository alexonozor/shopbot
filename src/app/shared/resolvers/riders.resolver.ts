import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Rider } from '../models/rider';
import { RidersService } from '../services/rider.service';


@Injectable({
  providedIn: 'root'
})
export class RidersResolver implements Resolve<Rider[]> {
  constructor(private riderService: RidersService) {}
  resolve(): Observable<Rider[]> {
    return this.riderService.getRiders();
  }
}


@Injectable({
  providedIn: 'root'
})
export class RiderResolver implements Resolve<Rider> {
  constructor(private riderService: RidersService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Rider> {
    const id = route.paramMap.get('id');
    return this.riderService.getRider(id);
  }
}