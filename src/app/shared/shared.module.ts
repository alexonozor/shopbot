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
import { WhatsAppComponent } from './components/send-to-whats-app/whats-app.component';


@NgModule({
  declarations: [
    ConfirmComponent,
    WhatsAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthService
  ],
  exports: [
    ConfirmComponent
  ]
})
export class SharedModule { }
