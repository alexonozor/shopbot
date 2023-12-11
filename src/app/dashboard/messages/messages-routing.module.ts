import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { ListMessagesComponent } from '../messages/list-messages/list-messages.component';
import { NotificationsResolver } from '../../shared/resolvers/notifications.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';

const routes: Routes = [
  {
    path: '',
    component: MessagesComponent,
    children: [
      {
        path: 'list',
        component: ListMessagesComponent,
        resolve: { notifications: NotificationsResolver, deliveries: DeliveryZonesResolver }
      }  
    ]
  }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class MessagesRoutingModule { }
