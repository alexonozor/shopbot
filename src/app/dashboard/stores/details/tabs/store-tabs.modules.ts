import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreMenusComponent } from './menus/list/menus.component';
import { MenusService } from './menus/list/menus.service';
import { MaterialModule } from 'src/app/material';
import { AddMenusComponent } from './menus/modals/add-menus/add-menus.component';
import { EditMenusComponent } from './menus/modals/edit-menus/edit-menus.component';
import { BusinessHoursTabComponent } from './business-hours-tab/business-hours-tab.component';
import { PickupAndDeliveryTabComponent } from './pickup-and-delivery-tab/pickup-and-delivery-tab.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { BankAccountTabComponent } from './bank-account-tab/bank-account-tab.component';
import { BankService } from 'src/app/shared/services/bank.service';
import { AddBankComponent } from './bank-account-tab/modals/add-bank/add-bank.component';
import { OrdersComponent } from './orders/orders.component';
import { FinanceDetailsComponent } from './finance-details/finance-details.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule, NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter'

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatGoogleMapsAutocompleteModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule
  ],
  exports: [
    StoreMenusComponent,
    BusinessHoursTabComponent,
    PickupAndDeliveryTabComponent,
    GeneralTabComponent,
    BankAccountTabComponent,
    OrdersComponent,
    FinanceDetailsComponent
  ],
  declarations: [
    StoreMenusComponent,
    AddMenusComponent,
    EditMenusComponent,
    BusinessHoursTabComponent,
    PickupAndDeliveryTabComponent,
    GeneralTabComponent,
    BankAccountTabComponent,
    AddBankComponent,
    OrdersComponent,
    FinanceDetailsComponent
  ],
  providers: [
    MenusService,
    BankService,
  ],
})
export class StoreTabsModule {
}