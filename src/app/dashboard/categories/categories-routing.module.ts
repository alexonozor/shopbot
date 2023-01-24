import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CategoriesResolver, CategoryResolver } from '../../shared/resolvers/categories.resolver';
import { CategoryDetailsComponent } from './category-details/categories-details.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: 'list',
        component: ListCategoriesComponent,
        resolve: { categories: CategoriesResolver }
      },
      {
        path: 'new',
        component: CreateCategoriesComponent
      },
      {
        path: ':id/details',
        component: CategoryDetailsComponent,
        resolve: { category: CategoryResolver }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class CategoriesRoutingModule { }
