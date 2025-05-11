import { CommonModule, Location,  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';



@Component({
  selector: 'app-store-category-details',
  standalone: true,
  imports: [
    CommonModule,  
    FlexLayoutModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './store-category-details.component.html',
  styleUrl: './store-category-details.component.scss',
})
export class StoreCategoryDetailsComponent  {  
  protected location = inject(Location)
  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {

  }

  protected back(): void {
    this.location.back();
  }


}
