import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transfer } from '../models/transfer';

@Injectable()
export class TransfersService  {
  private hostServer: string = environment.hostServer;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}


  createTransfer(params:any) {
    return this._httpClient.post(`${this.hostServer}/transfers`, params);
  }
  

  getTransfers(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.hostServer}/transfers`);
  }

  getTransfer(id:any): Observable<Transfer> {
    return this._httpClient.get<Transfer>(`${this.hostServer}/transfers/${id}`);
  }

  updateTransfer(transferId: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/transfers/${transferId}`, params);
  }

  deleteTransfer(transferId: string) {
    return this._httpClient.delete(`${this.hostServer}/transfers/${transferId}`);
  }

}
