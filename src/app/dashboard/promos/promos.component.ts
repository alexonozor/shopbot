import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss'],
  imports: [
    RouterModule
  ]
})
export class PromosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
