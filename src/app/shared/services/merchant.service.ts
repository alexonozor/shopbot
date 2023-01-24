import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Merchant } from '../models/merchant';

@Injectable()
export class MerchantsService {
  merchants!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getMerchants(): Observable<Merchant[]> {
    return this._httpClient.get<Merchant[]>(`${this.hostServer}/merchants`);
  }

  getMerchant(id:any): Observable<Merchant> {
    return this._httpClient.get<Merchant>(`${this.hostServer}/merchants/${id}`);
  }

  deleteMerchant(id:string): Observable<Merchant> {
    return this._httpClient.delete<Merchant>(`${this.hostServer}/merchants/${id}`);
  }

  updateMerchant(id:string, params: any) : Observable<Merchant> {
    return this._httpClient.put<Merchant>(`${this.hostServer}/merchants/${id}`, params);
  }

  createMerchant(params: any) : Observable<Merchant> {
    return this._httpClient.post<Merchant>(`${this.hostServer}/merchants`, params);
  } 
}