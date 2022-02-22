import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './messages.component';
import { MaterialModule } from 'src/app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MessagesRoutingModule } from './messages.routing';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    MessagesComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }