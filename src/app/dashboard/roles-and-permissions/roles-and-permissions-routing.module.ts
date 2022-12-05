import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesAndPermissionsComponent } from './roles-and-permissions.component';
import { ListRolesAndPermissionsComponent } from './list-roles-and-permissions/list-roles-and-permissions.component';
import { NewRolesAndPermissionsComponent } from './new-roles-and-permissions/new-roles-and-permissions.component';

const routes: Routes = [
  {
    path: '',
    component: RolesAndPermissionsComponent,
    children: [
      {
        path: 'list',
        component: ListRolesAndPermissionsComponent,
        resolve: { orders: OrdersResolver }
      },
      {
        path: 'new',
        component: NewRolesAndPermissionsComponent,
        resolve: { order: OrderResolver }
      }
    ]
  }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesAndPermissionsRoutingModule { }
