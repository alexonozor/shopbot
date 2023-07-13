import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { PaymentComponent } from './payment/payment.component';
import { VersionSettingsComponent } from './version-settings/version-settings.component';
import { VersionResolver } from 'src/app/shared/resolvers/settings.resolver';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
 
    {
      path: 'payments',
      loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule),
    },
    {
      path: 'blocks',
      loadChildren: () => import('./blocks/blocks.module').then(m => m.BlockModule),
    },
    {
        path: 'version-settings',
        component: VersionSettingsComponent,
        resolve: { version: VersionResolver }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SettingsRoutingModule { }
