import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.css'],
  imports: [
    RouterModule
  ]
})
export class PayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
