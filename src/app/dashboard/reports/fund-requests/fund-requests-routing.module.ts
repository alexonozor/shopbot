import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundRequestsComponent } from './fund-requests.component';
import { FundRequestsListComponent } from './fund-requests-list/fund-requests-list.component';
import { NewFundRequestsComponent } from './new-fund-requests/new-fund-requests.component';
import { FundRequestsResolver, FundRequestResolver } from 'src/app/shared/resolvers/fund-requests.resolver';
import { EditFundRequestsComponent } from './edit-fund-requests/edit-fund-requests.component';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';

const routes: Routes = [
  { 
    path: '', 
    component: FundRequestsComponent,
    children: [
      {
         path: 'list',
         component: FundRequestsListComponent,
         resolve: { funds: FundRequestsResolver }
      },
      {
        path: 'new',
        component: NewFundRequestsComponent,
        resolve: { deliveries: DeliveryZonesResolver }
     },
     {
      path: ':id/edit',
      component: EditFundRequestsComponent,
      resolve: { fund: FundRequestResolver, deliveries: DeliveryZonesResolver }
   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRequestsRoutingModule { }
