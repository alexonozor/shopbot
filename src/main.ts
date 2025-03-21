// import { enableProdMode, importProvidersFrom } from '@angular/core';

// import { environment } from './environments/environment';
// import {
//   HTTP_INTERCEPTORS,
//   withInterceptorsFromDi,
//   provideHttpClient,
// } from '@angular/common/http';
// import { TokenInterceptorService } from './app/shared/interceptor/token-interceptor.service';
// import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { AppComponent } from './app/app.component';

// const config: SocketIoConfig = { url: 'https://shopbot.ngrok.io', options: {} };

// if (environment.production) {
//   enableProdMode();
// }

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(
//       BrowserModule,
//       ServiceWorkerModule.register('/ngsw-worker.js', { enabled: true }),
//       SocketIoModule.forRoot(config)
//     ),
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: TokenInterceptorService,
//       multi: true,
//     },
//     provideAnimations(),
//     provideHttpClient(withInterceptorsFromDi()),
//   ],
// })
//   .then(() => {})
//   .catch((err) => console.error(err));

  import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

