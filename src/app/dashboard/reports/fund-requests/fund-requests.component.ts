import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fund-requests',
  templateUrl: './fund-requests.component.html',
  styleUrls: ['./fund-requests.component.scss'],
  imports: [
    RouterModule
  ]
})
export class FundRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
