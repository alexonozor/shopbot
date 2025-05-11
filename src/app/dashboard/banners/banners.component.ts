import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BannersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
