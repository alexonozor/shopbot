import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoresService } from './stores.service';
import { filterNames, ListStoresComponent } from './list-stores/list-stores.component';
import { AuthService } from '../../shared/services/auth.service';
import { MaterialModule } from 'src/app/material';
import { StoresRoutingModule } from './stores.routing';
import { StoresComponent } from './stores.component';
import { CommonModule } from '@angular/common';
import { AddStoresComponent } from './modals/add-stores/add-stores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreService } from './details/store.service';
import { MenuDetailsComponent } from './details/menu-details/menu-details.component';
import { MenuService } from '../../shared/services/menu.service';
import { AddItemToMenuComponent } from './details/menu-details/modal/add-item-to-menu/add-item-to-menu.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CuisinesService } from 'src/app/shared/services/cuisines.service';
import { MerchantTabComponent } from './details/tabs/merchant-tab/merchant-tab.component';
import { CategoriesResolver } from 'src/app/shared/resolvers/categories.resolver';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { MerchantResolver, MerchantsResolver } from 'src/app/shared/resolvers/merchants.resolver';
import { MerchantsService } from 'src/app/shared/services/merchant.service';
import { DeliveryZoneResolver, DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';
import { StoreResolver } from 'src/app/shared/resolvers/store.resolver';


@NgModule({
  imports: [
  CommonModule,
    MaterialModule,
    StoresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    StoresComponent,
    ListStoresComponent,
    AddStoresComponent,
    MenuDetailsComponent,
    AddItemToMenuComponent,
    MerchantTabComponent,
    filterNames
  ],
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
    MerchantsResolver,
    DeliveryZoneResolver,
    DeliveryZonesResolver,
    DeliveryZoneService,
    StoreResolver
  ],
  exports: [
    AddItemToMenuComponent,
    MerchantTabComponent
  ]
})
export class StoresModule {

}
