import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPromosComponent } from './list-promos/list-promos.component';
import { PromosComponent } from './promos.component';
import { EditPromoComponent } from './edit-promo/edit-promo.component';
import { PromoResolver, PromosResolver } from 'src/app/shared/resolvers/promo.resolver';
import { CreatePromosComponent } from './create-promos/create-promos.component';

const routes: Routes = [
  {
    path: '',
    component: PromosComponent,
    children: [
      {
        path: 'list',
        component: ListPromosComponent,
        resolve: { promos: PromosResolver }
      },
      {
        path: 'new',
        component: CreatePromosComponent,
      },
      {
        path: ':id/details',
        component: EditPromoComponent,
        resolve: { promo: PromoResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class PromosRoutingModule { }
