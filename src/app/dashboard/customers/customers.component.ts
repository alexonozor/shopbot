import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  imports: [RouterModule]
})
export class CustomersComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
