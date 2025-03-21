import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.scss'],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MerchantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
