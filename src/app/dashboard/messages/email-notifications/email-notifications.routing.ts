import {  Routes } from '@angular/router';
import { EmailNotificationsComponent } from './email-notifications.component';
import { CreateEmailTemplateComponent } from './create-email-template/create-email-template.component';
import { ListEmailTemplatesComponent } from './list-email-templates/list-email-templates.component';

export const EMAIL_ROUTES: Routes = [
  {
    path: '',
    component: EmailNotificationsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListEmailTemplatesComponent,
      },
      {
        path: 'create',
        component: CreateEmailTemplateComponent
      },
      {
        path: ':id/edit',
        component: CreateEmailTemplateComponent
      }
    ]
  }
];

