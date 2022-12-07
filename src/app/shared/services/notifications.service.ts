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
import { Notification } from '../models/notification';

@Injectable()
export class NotificationsService {
  notifications!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}


  createNotification(params:any) {
    return this._httpClient.post(`${this.hostServer}/notifications`, params);
  }
  

  getNotifications(): Observable<Notification[]> {
    return this._httpClient.get<Notification[]>(`${this.hostServer}/notifications`);
  }

  getNotification(id:any): Observable<Notification> {
    return this._httpClient.get<Notification>(`${this.hostServer}/notifications/${id}`);
  }

  updateNotification(notificationId: string, params:any) {
    return this._httpClient.put(`${this.hostServer}/notifications/${notificationId}`, params);
  }

  deleteNotification(notificationId: string) {
    return this._httpClient.delete(`${this.hostServer}/notifications/${notificationId}`);
  }
}