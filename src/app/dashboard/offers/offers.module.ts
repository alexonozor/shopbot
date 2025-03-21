import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    OffersResolver,
    OfferResolver,
} from '../../shared/resolvers/offers.resolver';
import { OffersService } from '../../shared/services/offers.service';
import { NewOfferComponent } from '../offers/new-offer/new-offer.component';

import { UsersService } from 'src/app/shared/services/users.service';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { MenusService } from '../stores/details/tabs/products-tab/categories/list/menus.service';

@NgModule({
    imports: [
    CommonModule,
    OffersRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    OffersComponent,
    OffersListComponent,
    NewOfferComponent,
    EditOfferComponent,
],
    providers: [
        OffersResolver,
        OfferResolver,
        OffersService,
        UsersService,
        MenusService
    ],
})
export class OffersModule {}
