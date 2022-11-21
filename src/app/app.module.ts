import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MaterialModule } from './material';
import { NgChartsModule } from 'ng2-charts';

const config: SocketIoConfig = { url: environment.hostServer, options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true }),
    SocketIoModule.forRoot(config),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
