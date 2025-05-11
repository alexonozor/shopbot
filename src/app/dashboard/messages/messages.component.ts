import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  imports: [
    RouterModule
  ]
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
