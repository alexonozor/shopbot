import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminResolver, AdminsResolver } from '../../shared/resolvers/admin.resolver';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { PermissionsResolver } from '../../shared/resolvers/permissions.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'list',
        component: ListAdminComponent,
        resolve: { admins: AdminsResolver }
      },
      {
        path: 'new',
        component: CreateAdminComponent,
        resolve: { roles: PermissionsResolver  }
      },
      {
        path: ':id/details',
        component: AdminDetailsComponent,
        resolve: { admin: AdminResolver, roles: PermissionsResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AdminRoutingModule { }
