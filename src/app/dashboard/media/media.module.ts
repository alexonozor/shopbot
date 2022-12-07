import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { ListsAllMediaComponent } from './tabs/lists-all-media/lists-all-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MediaComponent,
    ListsAllMediaComponent,
    
  ],
  imports: [
  CommonModule,
    MediaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ListsAllMediaComponent,
    MediaComponent 
  ]
})
export class MediaModule { }
