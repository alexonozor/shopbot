import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { ListsAllMediaComponent } from './tabs/lists-all-media/lists-all-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
    imports: [
    CommonModule,
    MediaRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MediaComponent,
    ListsAllMediaComponent
],
    exports: [
        ListsAllMediaComponent,
        MediaComponent
    ]
})
export class MediaModule { }
