import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-withdrawals',
  templateUrl: './withdrawals.component.html',
  styleUrls: ['./withdrawals.component.css'],
  imports: [
    RouterModule
  ]
})
export class WithdrawalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
