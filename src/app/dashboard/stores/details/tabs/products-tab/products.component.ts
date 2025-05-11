import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-store-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class StoreProductComponent  {
    protected links = [
        {
          id: 0,
          name: "Categories",
          path: "categories"
        },
        {
          id: 1,
          name: "Products",
          path: "./products"
        },
        {
          id: 2,
          name: "Group Options",
          path: "./group-options"
        },
        {
          id: 3,
          name: "options",
          path: "options",
        },
      ];
      activeLink = this.links[0].path;

}
