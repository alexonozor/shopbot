import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories!: any[];
  private hostServer: string = environment.hostServer;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this._httpClient.get<Category[]>(`${this.hostServer}/categories`);
  }

  getCategory(id:any): Observable<Category> {
    return this._httpClient.get<Category>(`${this.hostServer}/categories/${id}`);
  }

  deleteCategory(id:string): Observable<Category> {
    return this._httpClient.delete<Category>(`${this.hostServer}/categories/${id}`);
  }

  updateCategory(id:string, params: any) : Observable<Category> {
    return this._httpClient.put<Category>(`${this.hostServer}/categories/${id}`, params);
  }

  createCategory(params: any) : Observable<Category> {
    return this._httpClient.post<Category>(`${this.hostServer}/categories`, params);
  } 
}