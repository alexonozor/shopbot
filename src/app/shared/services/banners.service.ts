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
import { Banner } from '../models/banner';

@Injectable()
export class BannersService {
  banners!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}


  createBanner(params:any) {
    return this._httpClient.post(`${this.hostServer}/banners`, params);
  }
  

  getBanners(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.hostServer}/banners/admin`);
  }

  getBanner(id:any): Observable<Banner> {
    return this._httpClient.get<Banner>(`${this.hostServer}/banners/${id}`);
  }

  updateBanner(bannerId: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/banners/${bannerId}`, params);
  }

  deleteBanner(bannerId: string) {
    return this._httpClient.delete(`${this.hostServer}/banners/${bannerId}`);
  }
}
