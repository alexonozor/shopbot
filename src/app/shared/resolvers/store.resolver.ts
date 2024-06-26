import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '../models/store';
import { StoreService } from 'src/app/dashboard/stores/details/store.service';

@Injectable({
  providedIn: 'root'
})

export class StoreResolver implements Resolve<Store> {
  constructor(private storeService: StoreService) {}
  resolve(route: ActivatedRouteSnapshot): Promise<Store> {
    const id = route.paramMap.get('id') as string
    return this.storeService.getStore(id);
  }
}