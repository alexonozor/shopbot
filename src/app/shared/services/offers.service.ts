import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offer } from '../models/offer';

@Injectable()
export class OffersService {
  offers!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getOffers(): Observable<Offer[]> {
    return this._httpClient.get<Offer[]>(`${this.hostServer}/offers`);
  }

  getOffer(id:any): Observable<Offer> {
    return this._httpClient.get<Offer>(`${this.hostServer}/offers/${id}`);
  }

  deleteOffer(id:string): Observable<Offer> {
    return this._httpClient.delete<Offer>(`${this.hostServer}/offers/${id}`);
  }

  updateOffer(id:string, params: any) : Observable<Offer> {
    return this._httpClient.put<Offer>(`${this.hostServer}/offers/${id}`, params);
  }

  createOffer(params: any) : Observable<Offer> {
    return this._httpClient.post<Offer>(`${this.hostServer}/offers`, params);
  } 
}