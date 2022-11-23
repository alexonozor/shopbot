import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AdminResolver, AdminsResolver } from '../../shared/resolvers/admin.resolver';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

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
        component: CreateAdminComponent
      },
      {
        path: ':id/details',
        component: AdminDetailsComponent,
        resolve: { admin: AdminResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class AdminRoutingModule { }
