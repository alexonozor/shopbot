import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getUsers(query?:any): Observable<User[]> {
    const obj: any = query;
    const queryParams = JSON.stringify(obj);
    return this._httpClient.get<User[]>(`${this.hostServer}/users?query=${queryParams}`);
  }

  getUser(id:any): Observable<User> {
    return this._httpClient.get<User>(`${this.hostServer}/users/${id}`);
  }

  countUsers(): Observable<number> {
    return this._httpClient.get<number>(`${this.hostServer}/users/count/all`);
  }

  deleteUser(id:string): Observable<User> {
    return this._httpClient.delete<User>(`${this.hostServer}/users/${id}`);
  }

  updateUser(id:string, params: any) : Observable<User> {
    return this._httpClient.put<User>(`${this.hostServer}/users/${id}`, params);
  } 

  getUserTransactions(userId:string) {
    return this._httpClient.get<any[]>(`${this.hostServer}/wallet-transactions/${userId}/transactions`);
  }

  getUserReferrals(userId:string):any {
    return this._httpClient.get(`${this.hostServer}/referrals/${userId}/transactions`)
  }

  getUserReferralStats(userId:string):any {
    return this._httpClient.get(`${this.hostServer}/referrals/${userId}/stats`)
  }

  getUserAddresses(userId:string):any {
    return this._httpClient.get(`${this.hostServer}/addresses/${userId}/user`)
  }

  

  
}
