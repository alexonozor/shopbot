import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';
import { SettingsService } from '../services/settings.service';
import { Block } from 'src/app/shared/models/block';

@Injectable({
  providedIn: 'root'
})

export class PaymentsResolver implements Resolve<Payment[]> {
  constructor(private settingsService: SettingsService) {}

  resolve(): Observable<Payment[]> {
    return this.settingsService.getPayments();
  }
}


@Injectable({
  providedIn: 'root'
})

export class PaymentResolver implements Resolve<Payment> {
  constructor(private settingsService: SettingsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Payment> {
    const id = route.paramMap.get('id')
    return this.settingsService.getPayment(id);
  }
}

@Injectable({
  providedIn: 'root'
})

export class VersionResolver implements Resolve<any> {
  constructor(private settingsService: SettingsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.settingsService.getVersion();
  }
}


@Injectable({
  providedIn: 'root'
})

export class BlockResolver implements Resolve<Block> {
  constructor(private settingsService: SettingsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Block> {
    const id = route.paramMap.get('id')
    return this.settingsService.getBlock(id);
  }
}


@Injectable({
  providedIn: 'root'
})

export class BlocksResolver implements Resolve<Block[]> {
  constructor(private settingsService: SettingsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Block[]> {
    return this.settingsService.getBlocks({country: 'Nigeria'});
  }
}
