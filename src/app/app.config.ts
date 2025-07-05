import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TokenInterceptorService } from './shared/interceptor';
import {  progressInterceptor } from 'ngx-progressbar/http';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.hostServer, options: {
  transports: ['websocket'], // Force WebSocket
  withCredentials: true, // Ensure credentials are sent
} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCharts(withDefaultRegisterables()),
    provideNativeDateAdapter(),
    importProvidersFrom(
      BrowserModule,
      // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true }),
      SocketIoModule.forRoot(config)
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([progressInterceptor])
    ),
  ],
};
