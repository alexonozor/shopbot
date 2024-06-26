import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { StoreProductsListComponent } from './store-products-list/store-products-list.component';
import { StoreProductCreateComponent } from './store-product-create/store-product-create.component';
import { productResolver } from '../categories/store-category-details/store-category-details.routing';
import { inject } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu';
import { MenusService } from '../categories/list/menus.service';

export const categoriesResolver: ResolveFn<Menu[]> = (route, state) => {
 const id = getId(route)
  return inject(MenusService).getStoreMenus(id)
}

const getId = (route: ActivatedRouteSnapshot) => {
     // Start from the current route
     let currentRoute: ActivatedRouteSnapshot | null = route;
    
     // Traverse up to the root route
     while (currentRoute) {
       const id = currentRoute.paramMap.get('id');
       if (id) {
         return id; // Return the first found 'id'
       }
       currentRoute = currentRoute.parent; // Move to the parent route
     }
     return null
}

export const STORE_PRODUCTS_ROUTE: Routes = [
  {
    path: 'list',
    component: StoreProductsListComponent
  },
  {
    path: 'new',
    component: StoreProductCreateComponent,
    resolve: {storeCategories: categoriesResolver}
  },
  {
    path: ':productId/edit',
    component: StoreProductCreateComponent,
    resolve: {product: productResolver, storeCategories: categoriesResolver}
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list',
  }
];


