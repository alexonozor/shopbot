import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { OffersListComponent } from './offers-list/offers-list.component';
// import { OffersDetailsComponent } from './offers-details/offers-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import {
    OffersResolver,
    OfferResolver,
} from '../../shared/resolvers/offers.resolver';
import { OffersService } from '../../shared/services/offers.service';
import { NewOfferComponent } from '../offers/new-offer/new-offer.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersService } from 'src/app/shared/services/users.service';
import { MenusService } from '../stores/details/tabs/menus/list/menus.service';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { EditOfferComponent } from './edit-offer/edit-offer.component';

@NgModule({
  declarations: [
    OffersComponent, 
    OffersListComponent,
    NewOfferComponent,
    EditOfferComponent
  ],
  imports: [

  CommonModule,
    OffersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    //  NgxMatDateAdapter 
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
