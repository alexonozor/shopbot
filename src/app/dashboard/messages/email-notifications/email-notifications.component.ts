import { CommonModule } from '@angular/common';
import {  Component,  } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'email-notifications',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './email-notifications.component.html',
  styleUrl: './email-notifications.component.scss',
})
export class EmailNotificationsComponent { 
 

}
