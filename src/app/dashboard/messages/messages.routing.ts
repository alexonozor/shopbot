import {  Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { ListMessagesComponent } from './push-notifications/list-messages/list-messages.component';
import { NotificationsResolver } from '../../shared/resolvers/notifications.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { EmailNotificationsComponent } from './email-notifications/email-notifications.component';

export const MESSAGING_ROUTES: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: 'list',
        component: ListMessagesComponent,
        resolve: { notifications: NotificationsResolver, deliveries: DeliveryZonesResolver }
      },
      {
        path: 'email',
        loadChildren: () => import('./email-notifications/email-notifications.routing').then(m => m.EMAIL_ROUTES),
      } 
    ]
  }
];

