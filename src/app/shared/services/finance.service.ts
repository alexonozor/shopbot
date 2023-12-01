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
import { environment } from 'src/environments/environment';
import { Cuisine } from '../models/cuisine';

@Injectable()
export class FinancesService {
  finances!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getFinances(params:any): Observable<any[]> {
    let httpParams = new HttpParams({ fromObject: params });
    return this._httpClient.get<any[]>(`${this.hostServer}/transactions/financial/reports?${httpParams.toString()}`);
  }

 
}
