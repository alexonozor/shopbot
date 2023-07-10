import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Transfer } from '../models/transfer';
import { TransfersService } from '../services/transfer.service';

@Injectable({
  providedIn: 'root'
})

export class TransfersResolver implements Resolve<Transfer[]> {
  constructor(private transfersService: TransfersService) {}

  resolve(): Observable<Transfer[]> {
    return this.transfersService.getTransfers();
  }
}


@Injectable({
  providedIn: 'root'
})

export class TransferResolver implements Resolve<Transfer> {
  constructor(private transferService: TransfersService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Transfer> {
    const id = route.paramMap.get('id')
    return this.transferService.getTransfer(id);
  }
}