import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { UserResolver, UsersResolver} from 'src/app/shared/resolvers/customers.resolver';
import { UsersService } from 'src/app/shared/services/users.service';
import { MaterialModule } from 'src/app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { EditCustomersInfoComponent } from './modals/edit-customers-info/edit-customers-info.component';
import { EditCustomersNotesComponent } from './modals/edit-customers-notes/edit-customers-notes.component';
import { EditCustomersMarketingStatusComponent } from './modals/edit-customers-marketing-status/edit-customers-marketing-status.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    CustomersDetailsComponent,
    EditCustomersInfoComponent,
    EditCustomersNotesComponent,
    EditCustomersMarketingStatusComponent,
  ],
  imports: [
  CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],

  providers: [UserResolver, UsersResolver, UsersService],

  exports: [
     EditCustomersInfoComponent,
     EditCustomersNotesComponent,
     EditCustomersMarketingStatusComponent

  ]
})
export class CustomersModule { }
