import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  imports: [
    RouterModule
  ]
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
