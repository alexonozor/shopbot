import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeliveryZone } from '../models/delivery-zone';

@Injectable({
  providedIn: 'root'
})
export class DeliveryZoneService {
  users!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  createDeliveryZone(deliveryzone:any): Observable<DeliveryZone> {
    return this._httpClient.post<DeliveryZone>(`${this.hostServer}/delivery-zones`, deliveryzone);
  }

  getDeliveryZones(): Observable<DeliveryZone[]> {
    return this._httpClient.get<DeliveryZone[]>(`${this.hostServer}/delivery-zones`);
  }

  getDeliveryZone(id:any): Observable<DeliveryZone> {
    return this._httpClient.get<DeliveryZone>(`${this.hostServer}/delivery-zones/${id}`);
  }

  deleteDeliveryZone(id:any): Observable<DeliveryZone> {
    return this._httpClient.delete<DeliveryZone>(`${this.hostServer}/delivery-zones/${id}`);
  }

  updateDeliveryZone(id:string, params: any) : Observable<DeliveryZone> {
    return this._httpClient.put<DeliveryZone>(`${this.hostServer}/delivery-zones/${id}`, params);
  } 
}