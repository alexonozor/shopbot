import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.scss'],
  imports: [
    RouterModule
  ]
})
export class RolesAndPermissionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
