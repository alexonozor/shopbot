import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FundRequest } from '../models/fund-request';

@Injectable()
export class FundRequestsService {
  users!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  createFundRequests(FundRequests:any): Observable<FundRequest> {
    return this._httpClient.post<FundRequest>(`${this.hostServer}/fund-requests`, FundRequests);
  }

  getFundRequests(): Observable<FundRequest[]> {
    return this._httpClient.get<FundRequest[]>(`${this.hostServer}/fund-requests`);
  }

  getFundRequest(id:any): Observable<FundRequest> {
    return this._httpClient.get<FundRequest>(`${this.hostServer}/fund-requests/${id}`);
  }

  deleteFundRequests(id:any): Observable<FundRequest> {
    return this._httpClient.delete<FundRequest>(`${this.hostServer}/fund-requests/${id}`);
  }

  updateFundRequests(id:string, params: any) : Observable<FundRequest> {
    return this._httpClient.put<FundRequest>(`${this.hostServer}/fund-requests/${id}`, params);
  } 

  updateStatusFundRequests(id:string, params: any) : Observable<FundRequest> {
    return this._httpClient.put<FundRequest>(`${this.hostServer}/fund-requests/${id}/status`, params);
  }
}