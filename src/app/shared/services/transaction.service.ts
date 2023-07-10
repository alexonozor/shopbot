import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';

@Injectable()
export class TransactionsService  {
  private hostServer: string = environment.hostServer;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}


  createTransaction(params:any) {
    return this._httpClient.post(`${this.hostServer}/transactions`, params);
  }
  

  getTransactions(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.hostServer}/transactions`);
  }

  getTransaction(id:any): Observable<Transaction> {
    return this._httpClient.get<Transaction>(`${this.hostServer}/transactions/${id}`);
  }

  updateTransaction(transactionId: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/transactions/${transactionId}`, params);
  }

  deleteTransaction(transactionId: string) {
    return this._httpClient.delete(`${this.hostServer}/transactions/${transactionId}`);
  }

}
