import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-riders',
  templateUrl: './riders.component.html',
  styleUrls: ['./riders.component.scss'],
  imports: [
    RouterModule
  ]
})
export class RidersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
