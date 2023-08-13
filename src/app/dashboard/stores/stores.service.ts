import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from 'src/app/shared/models/store';

@Injectable()
export class StoresService implements Resolve<any>
{
  stores: any[] = [];
  onStoresChanged: BehaviorSubject<any>;
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private auth: AuthService,
    
  ) {
    // Set the defaults
    this.onStoresChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getUserStores({data: { $match: {} }, control: [{ $sort: { 'createdAt': -1 }}]})
      ]).then(
        () => {
          resolve(null);
        },
        reject
      );
    });
  }

  /**
   * Get stores
   *
   * @returns {Promise<any>}
   */
   getUserStores(queryParams:any): Promise<any> {
    return new Promise((resolve, reject) => {
      const query = JSON.stringify(queryParams)
      this._httpClient.get(`${this.hostServer}/stores?query=${query}`)
        .subscribe((response: any) => {
          this.stores = response;
          this.onStoresChanged.next(this.stores);
          // this.navigation.removeNavigationItem('stores')
          // this.navigation.setCurrentNavigation('business')
          resolve(response);
        }, reject);
    });
  }

  deleteStore(index:number, id:string) {
    this.stores.splice(index, 1);
    this.onStoresChanged.next(this.stores);
   return this._httpClient.delete(`${this.hostServer}/stores/${id}`)
  }

  createStore(params:any) {
   return this._httpClient.post(`${this.hostServer}/stores`, params)
  }

  getStores(query:any): Observable<Store[]> {
    const obj: any = query;
    const queryParams = JSON.stringify(obj);
    return this._httpClient.get<Store[]>(`${this.hostServer}/stores?query=${queryParams}`)
  }

  search(query:any): Observable<Store[]> {
    return this._httpClient.get<Store[]>(`${this.hostServer}/stores/search-store-admin?search=${query}`)
  }

/**
 * Search stores
 *
 * @returns {Observable<any>}
 */
  searchEntries(term:any) {
    return this._httpClient.get(`${this.hostServer}/foods/search-food?search=${term}`)
  }

  searchFood(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    )
  }
}
