import {  Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { VersionSettingsComponent } from './version-settings/version-settings.component';
import { VersionResolver } from 'src/app/shared/resolvers/settings.resolver';

export const SETTINGS_ROUTE: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
 
    {
      path: 'payments',
      loadChildren: () => import('./payment/payment.routing').then(m => m.PAYMENT_ROUTING),
    },
    {
      path: 'blocks',
      loadChildren: () => import('./blocks/blocks.routing').then(m => m.BLOCK_ROUTING),
    },
    {
        path: 'version-settings',
        component: VersionSettingsComponent,
        resolve: { version: VersionResolver }
    }
];

