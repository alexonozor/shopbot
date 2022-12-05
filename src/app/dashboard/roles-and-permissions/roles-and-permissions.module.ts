import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesAndPermissionsRoutingModule } from './roles-and-permissions-routing.module';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { NewRolesAndPermissionsComponent } from './new-roles-and-permissions/new-roles-and-permissions.component';
import { ListRolesAndPermissionsComponent } from './list-roles-and-permissions/list-roles-and-permissions.component';


@NgModule({
  declarations: [
    RolesAndPermissionsComponent,
    NewRolesAndPermissionsComponent,
    ListRolesAndPermissionsComponent
  ],
  imports: [
    CommonModule,
    RolesAndPermissionsRoutingModule
  ]
})
export class RolesAndPermissionsModule { }
