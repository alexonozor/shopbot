import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from 'src/app/shared/models/store';

@Injectable()
export class StoreService implements Resolve<any> {
  routeParams: any;
  store: any;
  onStoreChanged: BehaviorSubject<any>;
  private hostServer: string = environment.hostServer;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
  ) {
    // Set the defaults
    this.onStoreChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getStore()
      ]).then(
        () => {
          resolve(null);
        },
        reject
      );
    });
  }

  /**
   * Get store
   *
   * @returns {Promise<any>}
   */
  getStore(storeId?:string): Promise<any> {
    return new Promise((resolve, reject) => {

      this._httpClient.get(`${this.hostServer}/stores/${storeId || this.routeParams.id}`)
        .subscribe((response: any) => {
          this.store = response;
          this.onStoreChanged.next(this.store);
          resolve(response);
        }, reject);

    });
  }

  /**
   * upload store
   *
   * @param formData
   * @returns {Promise<any>}
   */
  uploadLogo(formData: any, id?: string): Observable<any> {
    return this._httpClient.post(`${this.hostServer}/stores/upload/${id}/logo`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  uploadBanner(formData: any, id?: string): Observable<any> {
    return this._httpClient.post(`${this.hostServer}/stores/upload/${id}/banner`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }


  /**
 * Save store
 *
 * @param store
 * @returns {Promise<any>}
 */
  saveStore(store: any, id: string) {
    return this._httpClient.put(`${this.hostServer}/stores/${id}`, store)
  }

  /**
   * Add store
   *
   * @param store
   * @returns {Observable<any>}
   */
  addStore(store: Store): Observable<any> {
    return this._httpClient.post(`${this.hostServer}/stores`, store)
  }


  addItemToPopular(store:any): Observable<any> {
    return this._httpClient.post(`${this.hostServer}/stores/add-item-to-popular`, store)
  }

  removeItemFromPopular(store:any): Observable<any> {
    return this._httpClient.post(`${this.hostServer}/stores/remove-item-from-popular`, store)
  }

  /**
* get store order
*
* @param store
* @returns {Promise<any>}
*/
  getStoreOrders(storeId: string) {
    return this._httpClient.get<any[]>(`${this.hostServer}/orders/store/${storeId}/orders`)
  }

  /**
* get store order
*
* @param store
* @returns {Promise<any>}
*/
  deleteStoreOrders(orderId: string) {
    return this._httpClient.delete(`${this.hostServer}/orders/${orderId}`)
  }

    /**
* update  order status
*
* @param store
* @returns {Promise<any>}
*/
updateOrderStatus(orderId: string, userId:string, status:any) {
  return this._httpClient.put(`${this.hostServer}/orders/${orderId}/status/${userId}`, status)
}
}
