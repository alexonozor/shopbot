import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersComponent } from './riders.component';
import { ListRiderComponent } from './list-riders/list-riders.component';
import { CreateRiderComponent } from './create-rider/create-rider.component';
import { RiderResolver, RidersResolver } from '../../shared/resolvers/riders.resolver';
import { RiderDetailsComponent } from './rider-details/rider-details.component';

const routes: Routes = [
  {
    path: '',
    component: RidersComponent,
    children: [
      {
        path: 'list',
        component: ListRiderComponent,
        resolve: { riders: RidersResolver }
      },
      {
        path: 'new',
        component: CreateRiderComponent
        // resolve: { roles: RidersResolver  }
      },
      {
        path: ':id/details',
        component: RiderDetailsComponent,
        resolve: { rider: RiderResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiderRoutingModule { }
