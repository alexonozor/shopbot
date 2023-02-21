import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoresService } from './stores.service';
import { filterNames, ListStoresComponent } from './list-stores/list-stores.component';
import { AuthService } from '../../shared/services/auth.service';
import { MaterialModule } from 'src/app/material';
import { StoresRoutingModule } from './stores.routing';
import { BrowserModule } from '@angular/platform-browser';
import { StoresComponent } from './stores.component';
import { CommonModule } from '@angular/common';
import { AddStoresComponent } from './modals/add-stores/add-stores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreComponent } from './details/store.component';
import { StoreTabsModule } from './details/tabs/store-tabs.modules';
import { StoreService } from './details/store.service';
import { MenuDetailsComponent } from './details/menu-details/menu-details.component';
import { MenuService } from './details/menu-details/menu.service';
import { AddItemToMenuComponent } from './details/menu-details/modal/add-item-to-menu/add-item-to-menu.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CuisinesTabComponent } from './details/tabs/cuisines-tab/cuisines-tab.component';
import { CuisinesService } from 'src/app/shared/services/cuisines.service';
import { MerchantTabComponent } from './details/tabs/merchant-tab/merchant-tab.component';
import { CategoriesResolver } from 'src/app/shared/resolvers/categories.resolver';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { MerchantResolver, MerchantsResolver } from 'src/app/shared/resolvers/merchants.resolver';
import { MerchantsService } from 'src/app/shared/services/merchant.service';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
  CommonModule,
    MaterialModule,
    StoresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    StoreTabsModule,
    RouterModule,
    
  ],
  declarations: [
    StoresComponent,
    ListStoresComponent,
    AddStoresComponent,
    StoreComponent,
    MenuDetailsComponent,
    AddItemToMenuComponent,
    CuisinesTabComponent,
    MerchantTabComponent,
    filterNames
  ],
  entryComponents: [AddItemToMenuComponent],
  providers: [
    StoresService,
    StoreService,
    AuthService,
    MenuService,
    ProductService,
    ProductsService,
    CuisinesService,
    CategoriesResolver, 
    CategoriesService,
    MerchantResolver,
    MerchantsService,
    MerchantsResolver
  ],
  exports: [
    AddItemToMenuComponent,
    CuisinesTabComponent,
    MerchantTabComponent
  ]
})
export class StoresModule {

}
