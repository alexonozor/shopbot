import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisinesComponent } from './cuisines.component';
import { ListCuisinesComponent } from './list-cuisines/list-cuisines.component';
import { CreateCuisinesComponent } from './create-cuisines/create-cuisines.component';
import { CuisinesResolver, CuisineResolver } from '../../shared/resolvers/cuisines.resolver';
import { CuisinesDetailsComponent } from './cuisines-details/cuisines-details.component';

const routes: Routes = [
  {
    path: '',
    component: CuisinesComponent,
    children: [
      {
        path: 'list',
        component: ListCuisinesComponent,
        resolve: { cuisines: CuisinesResolver }
      },
      {
        path: 'new',
        component: CreateCuisinesComponent
      },
      {
        path: ':id/details',
        component: CuisinesDetailsComponent,
        resolve: { cuisine: CuisineResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class CuisinesRoutingModule { }
