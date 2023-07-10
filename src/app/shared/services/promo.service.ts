import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Promo } from '../models/promo';

@Injectable()
export class PromosService {
  promos!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getPromos(): Observable<Promo[]> {
    return this._httpClient.get<Promo[]>(`${this.hostServer}/promos`);
  }

  getPromo(id:any): Observable<Promo> {
    return this._httpClient.get<Promo>(`${this.hostServer}/promos/${id}`);
  }

  deletePromo(id:string): Observable<Promo> {
    return this._httpClient.delete<Promo>(`${this.hostServer}/promos/${id}`);
  }

  updatePromo(id:string, params: any) : Observable<Promo> {
    return this._httpClient.put<Promo>(`${this.hostServer}/promos/${id}`, params);
  }

  createPromo(params: any) : Observable<Promo> {
    return this._httpClient.post<Promo>(`${this.hostServer}/promos`, params);
  } 
}