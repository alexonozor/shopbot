import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
  imports: [
    RouterModule
  ]
})
export class FinancesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
