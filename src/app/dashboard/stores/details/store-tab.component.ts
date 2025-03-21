import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { StoreService } from './store.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Store } from 'src/app/shared/models/store';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { Merchant } from 'src/app/shared/models/merchant';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-store-tab',
  templateUrl: './store-tab.component.html',
  styleUrls: ['./store-tab.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatTabsModule
  ]
})

export class StoreTabComponent implements OnInit, OnDestroy {
  store!: Store;
  storeId!: string;
  public selectedTab = 0;
  merchants: Merchant[];
  private _unsubscribeAll: Subject<any>;
  protected links = [
    {
      id: 0,
      name: "General",
      path: "general"
    },
    {
      id: 1,
      name: "Finance Details",
      path: "./finance-details"
    },
    {
      id: 2,
      name: "Products",
      path: "./products"
    },
    {
      id: 3,
      name: "Orders",
      path: "orders",
    },
    {
      id: 4,
      name: "Business Hours",
      path: "business-hours"
    },
    {
      id: 5,
      name: "Pickup and Delivery",
      path: "pickup-and-delivery"
    },
    {
      id: 6,
      name: "Cuisines",
      path: "cuisines"
    },
    {
      id: 7,
      name: "Bank Account",
      path: "bank-account"
    },
    {
      id: 7,
      name: "Merchant",
      path: "merchant"
    }
  ];
  activeLink = this.links[0].path;

  constructor(
    private storeService: StoreService,
    private _location: Location,
    private _matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._unsubscribeAll = new Subject();
    this.store = this.storeService.store;
    this.merchants = this.route.snapshot.data['merchants'] as Merchant[]
  }


  ngOnInit(): void {
    this.store = this.storeService.store;
    this.route.queryParams.subscribe((params: any) => {
      this.selectedTab = params.tab || 0;
    });
  }

  public tabChanged(event: MatTabChangeEvent) {
    const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);
    queryParams['tab'] = event.index;
    this.router.navigate(['.'], { queryParams: queryParams, relativeTo: this.route });
}

goBack() {
  this._location.back()
}

  ngOnDestroy(): void { }

}
