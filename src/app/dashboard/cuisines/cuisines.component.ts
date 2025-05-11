import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss'],
  imports: [
    RouterModule
  ]
})
export class CuisinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
