import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [
    RouterModule
  ]
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
