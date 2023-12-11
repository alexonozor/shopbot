import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Payment } from '../models/payment';
import { Block } from '../models/block';


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
  

  createBlock(params:any) {
    return this._httpClient.post(`${this.hostServer}/blocks`, params);
  }
  
  getBlocks(params:any): Observable<Block[]> {
    return this._httpClient.post<Block[]>(`${this.hostServer}/blocks/country/select`, params);
  }

  getBlock(id:any): Observable<Block> {
    return this._httpClient.get<Block>(`${this.hostServer}/blocks/${id}`);
  }

  updateBlock(id: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/blocks/${id}`, params);
  }

  deleteBlock(id: string) {
    return this._httpClient.delete(`${this.hostServer}/blocks/${id}`);
  }

  versionUpdate(params: any) {
    return this._httpClient.put(`${this.hostServer}/version-settings/64a3ac4b376e5b4172739f1b`, params);
  }

  getVersion() {
    return this._httpClient.get(`${this.hostServer}/version-settings/64a3ac4b376e5b4172739f1b`);
  }
}
