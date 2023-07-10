import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoriesService } from '../services/category.service';

@Injectable({
  providedIn: 'root'
})

export class CategoriesResolver implements Resolve<Category[]> {
  constructor(private categoryService: CategoriesService) {}

  resolve(): Observable<Category[]> {
    return this.categoryService.getCategories()
  }
}


@Injectable({
  providedIn: 'root'
})

export class CategoryResolver implements Resolve<Category> {
  constructor(private categoryService: CategoriesService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<Category> {
    const id = route.paramMap.get('id')
    return this.categoryService.getCategory(id);
  }
}
