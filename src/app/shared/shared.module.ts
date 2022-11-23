import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptor';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmComponent } from './components/comfirm/confirm.component';
import { AccountService } from './services/account.service';
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
