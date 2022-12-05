import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/comfirm/confirm.component';
import { FileMediaCardComponent } from './components/file-media-card/file-media-card.component';
import { SelectMediaComponent } from './components/select-media/select-media.component';
import { MaterialModule } from '../material';


@NgModule({
  declarations: [
    ConfirmComponent,
    FileMediaCardComponent,
    SelectMediaComponent
  ],
  imports: [
  CommonModule,
    RouterModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    ConfirmComponent,
    FileMediaCardComponent,
    SelectMediaComponent,
    
  ]
})
export class SharedModule { }
