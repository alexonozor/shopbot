import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { NewRolesAndPermissionsComponent } from './new-roles-and-permissions/new-roles-and-permissions.component';
import { ListRolesAndPermissionsComponent } from './list-roles-and-permissions/list-roles-and-permissions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { RolesAndPermissionsService } from 'src/app/shared/services/roles-and-permissions.service';
import { PermissionResolver, PermissionsResolver } from 'src/app/shared/resolvers/permissions.resolver';
import { EditRolesAndPermissionsComponent } from './edit-roles-and-permissions/edit-roles-and-permissions.component';


@NgModule({
    imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RolesAndPermissionsComponent,
    NewRolesAndPermissionsComponent,
    ListRolesAndPermissionsComponent,
    EditRolesAndPermissionsComponent
],
    providers: [RolesAndPermissionsService, PermissionsResolver, PermissionResolver]
})
export class RolesAndPermissionsModule { }
