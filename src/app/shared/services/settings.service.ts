import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';

@Injectable()
export class SettingsService  {
  payments!: Payment[];
  private hostServer: string = environment.hostServer;


  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}


  createPayment(params:any) {
    return this._httpClient.post(`${this.hostServer}/payment-methods`, params);
  }
  

  getPayments(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.hostServer}/payment-methods`);
  }

  getPayment(id:any): Observable<Payment> {
    return this._httpClient.get<Payment>(`${this.hostServer}/payment-methods/${id}`);
  }

  updatePayment(PaymentId: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/payment-methods/${PaymentId}`, params);
  }

  deletePayment(PaymentId: string) {
    return this._httpClient.delete(`${this.hostServer}/payment-methods/${PaymentId}`);
  }

  versionUpdate(params: any) {
    return this._httpClient.put(`${this.hostServer}/version-settings/649e53c6837973557666255a`, params);
  }

  getVersion() {
    return this._httpClient.get(`${this.hostServer}/version-settings/649e53c6837973557666255a`);
  }
}
