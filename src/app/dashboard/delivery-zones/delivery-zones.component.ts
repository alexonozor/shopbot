import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-delivery-zones',
  templateUrl: './delivery-zones.component.html',
  styleUrls: ['./delivery-zones.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DeliveryZonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
