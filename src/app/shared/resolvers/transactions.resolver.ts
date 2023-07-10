import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { TransactionsService } from '../services/transaction.service';

@Injectable({
  providedIn: 'root'
})

export class TransactionsResolver implements Resolve<Transaction[]> {
  constructor(private transactionsService: TransactionsService) {}

  resolve(): Observable<Transaction[]> {
    return this.transactionsService.getTransactions();
  }
}


@Injectable({
  providedIn: 'root'
})

export class TransactionResolver implements Resolve<Transaction> {
  constructor(private transactionService: TransactionsService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Transaction> {
    const id = route.paramMap.get('id')
    return this.transactionService.getTransaction(id);
  }
}