import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Option } from '../models/option';

@Injectable()
export class ProductsService implements Resolve<any>
{
  products!: Product[];
  onProductsChanged: BehaviorSubject<any>;
  private hostServer: string = environment.hostServer;


  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient
  ) {
    // Set the defaults
    this.onProductsChanged = new BehaviorSubject({});
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
        this.getProducts()
      ]).then(
        () => {
          resolve(null);
        },
        reject
      );
    });
  }

  /**
   * Get products
   *
   * @returns {Promise<any>}
   */
  getProducts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${this.hostServer}/foods`)
        .subscribe((response: any) => {
          this.products = response;
          this.onProductsChanged.next(this.products);
          resolve(response);
        }, reject);
    });
  }

  deleteProduct(index:number, id:string) {
   return this._httpClient.delete(`${this.hostServer}/foods/${id}`)
  }

  deleteOptionItem(id:string): Observable<Option> {
    return this._httpClient.delete<Option>(`${this.hostServer}/option-items/${id}`)
  }

  updateProduct(id:string, params:object) {
    return this._httpClient.put(`${this.hostServer}/foods/${id}`, params)
   }

 
  getStoreProducts(storeId:string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.hostServer}/foods/${storeId}/store/products`)
  }

  getStoreGroupOption(storeId:string): Observable<Option[]> {
    return this._httpClient.get<Option[]>(`${this.hostServer}/option-groups/${storeId}/store/option-groups`)
  }

  updateStoreGroupOptionItem(option:any, id:string): Observable<Option> {
    return this._httpClient.put<Option>(`${this.hostServer}/option-items/${id}`, option)
  }

  saveStoreGroupOptionItem(option:Option): Observable<Option> {
    return this._httpClient.post<Option>(`${this.hostServer}/option-items`, option)
  }


  updateStoreGroupOption(params:any, id:string): Observable<Option> {
    return this._httpClient.put<Option>(`${this.hostServer}/option-groups/${id}`, params)
  }

  getStoreGroupOptionItems(storeId:string): Observable<Option[]> {
    return this._httpClient.get<Option[]>(`${this.hostServer}/option-items/${storeId}/store/option-group-items`)
  }

  getGroupOptionItems(optionId:string): Observable<Option[]> {
    return this._httpClient.get<Option[]>(`${this.hostServer}/option-items/${optionId}/option-group/option-group-items`)
  }

  deleteStoreGroup(id:string): Observable<Option> {
    return this._httpClient.delete<Option>(`${this.hostServer}/option-groups/${id}`)
  }

  addProductIdToOptionGroup(id:string, params:object): Observable<Option> {
    return this._httpClient.put<Option>(`${this.hostServer}/option-groups/${id}/product/group-options`, params)
  }

  removeProductIdToOptionGroup(id:string, productId:string): Observable<Option> {
    return this._httpClient.put<Option>(`${this.hostServer}/option-groups/${id}/product/group-options/remove`, { productId })
  }

  saveStoreGroupOption(option:Option): Observable<Option> {
    return this._httpClient.post<Option>(`${this.hostServer}/option-groups`, option)
  }

  getCategoryProducts(categoryId:string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.hostServer}/foods/${categoryId}/category/products`)
   }

  

/**
 * Search products
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
