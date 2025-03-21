import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiderRoutingModule } from './riders-routing.module';
import { RidersComponent } from './riders.component';
import { ListRiderComponent } from './list-riders/list-riders.component';
import { CreateRiderComponent } from './create-rider/create-rider.component';
import { RidersService } from '../../shared/services/rider.service';
import { RiderResolver, RidersResolver } from 'src/app/shared/resolvers/riders.resolver';
import { RiderDetailsComponent } from './rider-details/rider-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
    CommonModule,
    RiderRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RidersComponent,
    ListRiderComponent,
    CreateRiderComponent,
    RiderDetailsComponent
],
    providers: [RidersResolver, RiderResolver, RidersService]
})
export class RiderModule { }
