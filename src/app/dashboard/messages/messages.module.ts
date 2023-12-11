import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { CreateMessagesComponent } from './create-messages/create-messages.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { NotificationResolver, NotificationsResolver } from '../../shared/resolvers/notifications.resolver';
import { DeliveryZonesResolver } from 'src/app/shared/resolvers/delivery-zones.resolver';
import { MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    MessagesComponent,
    ListMessagesComponent,
    CreateMessagesComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [NotificationsService, NotificationsResolver, NotificationResolver, DeliveryZonesResolver],
  exports: [
    CreateMessagesComponent
  ]
})
export class MessagesModule { }
