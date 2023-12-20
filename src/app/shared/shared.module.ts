import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FileMediaCardComponent } from './components/file-media-card/file-media-card.component';
import { SelectMediaComponent } from './components/select-media/select-media.component';
import { MaterialModule } from '../material';
import { StatsComponent } from './components/stats/stats.component';
import { NotificationComponent } from './components/notification/notification.component';
import { OrderCancelationComponent } from './components/order-cancelation/order-cancelation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmComponent,
    FileMediaCardComponent,
    SelectMediaComponent,
    StatsComponent,
    NotificationComponent,
    OrderCancelationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    ConfirmComponent,
    FileMediaCardComponent,
    SelectMediaComponent,
    StatsComponent,
    NotificationComponent,
    OrderCancelationComponent
  ]
})
export class SharedModule { }
