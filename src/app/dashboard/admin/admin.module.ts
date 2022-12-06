import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminService } from '../../shared/services/admin.service';
import { AdminResolver, AdminsResolver } from 'src/app/shared/resolvers/admin.resolver';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { PermissionsResolver } from 'src/app/shared/resolvers/permissions.resolver';
import { RolesAndPermissionsService } from 'src/app/shared/services/roles-and-permissions.service';


@NgModule({
  declarations: [
    AdminComponent,
    ListAdminComponent,
    CreateAdminComponent,
    AdminDetailsComponent
  ],
  imports: [
  CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AdminsResolver, AdminResolver, AdminService, RolesAndPermissionsService, PermissionsResolver]
})
export class AdminModule { }
