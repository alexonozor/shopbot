import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromosRoutingModule } from './promos-routing.module';
import { PromosComponent } from './promos.component';
import { ListPromosComponent } from './list-promos/list-promos.component';
import { CreatePromosComponent } from './create-promos/create-promos.component';
import { EditPromoComponent } from './edit-promo/edit-promo.component';
import { PromosResolver, PromoResolver } from 'src/app/shared/resolvers/promo.resolver';
import { PromosService } from 'src/app/shared/services/promo.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { UsersService } from 'src/app/shared/services/users.service';
import { StoresService } from '../stores/stores.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PromosComponent,
    ListPromosComponent,
    CreatePromosComponent,
    EditPromoComponent
  ],

  imports: [
    CommonModule,
    PromosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  
  providers: [
    PromosResolver,
    PromoResolver,
    PromosService,
    UsersService,
    StoresService
  ]
})
export class PromosModule { }
