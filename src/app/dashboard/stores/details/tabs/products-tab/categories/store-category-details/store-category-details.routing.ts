import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { StoreCategoryProductsComponent } from './store-category-products/store-category-products.component';
import { StoreCategoryDetailsComponent } from './store-category-details.component';
import { StoreProductCreateComponent } from '../../store-products/store-product-create/store-product-create.component';
import { Product } from 'src/app/shared/models/product';
import { inject } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Menu } from 'src/app/shared/models/menu';
import { MenusService } from '../list/menus.service';

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productId = route.paramMap.get('productId') as string;
  return inject(ProductService).getProductSingle(productId)
}


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

export const STORE_CATEGORY_DETAILS_ROUTE: Routes = [

  {
    path: 'products',
    component: StoreCategoryDetailsComponent,
    children: [
      {
        path: 'list',
        component: StoreCategoryProductsComponent
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
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'products',
  }
];


