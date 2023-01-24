import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CategoriesResolver, CategoryResolver } from 'src/app/shared/resolvers/categories.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { CategoryDetailsComponent } from './category-details/categories-details.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    ListCategoriesComponent,
    CreateCategoriesComponent,
    CategoryDetailsComponent
    
  ],
  imports: [
  
  CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CategoriesResolver, CategoryResolver, CategoriesService]
})
export class CategoriesModule { }
