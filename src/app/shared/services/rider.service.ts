import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rider } from '../models/rider';

@Injectable()
export class RidersService {
  riders!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getRiders(): Observable<Rider[]> {
    return this._httpClient.get<Rider[]>(`${this.hostServer}/riders`);
  }

  getRider(id:any): Observable<Rider> {
    return this._httpClient.get<Rider>(`${this.hostServer}/riders/${id}`);
  }

  deleteRider(id:string): Observable<Rider> {
    return this._httpClient.delete<Rider>(`${this.hostServer}/riders/${id}`);
  }

  updateRider(id:string, params: any) : Observable<Rider> {
    return this._httpClient.put<Rider>(`${this.hostServer}/riders/${id}`, params);
  }

  createRider(params: any) : Observable<Rider> {
    return this._httpClient.post<Rider>(`${this.hostServer}/riders`, params);
  } 
}