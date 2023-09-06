import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersComponent } from './offers.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { EditOfferComponent } from './edit-offer/edit-offer.component';
import { OfferResolver, OffersResolver,  } from '../../shared/resolvers/offers.resolver';
import { NewOfferComponent } from '../offers/new-offer/new-offer.component';


const routes: Routes = [
  {
    path: '',
    component: OffersComponent,
    children: [
      {
        path: 'list',
        component: OffersListComponent,
        resolve: { offers: OffersResolver }
      },
      {
        path: 'new-offer',
        component: NewOfferComponent,
      },
      {
        path: ':id/edit',
        component: EditOfferComponent,
        resolve: { offer: OfferResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],


exports: [RouterModule]
})
export class OffersRoutingModule { }
