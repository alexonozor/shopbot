import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, map, finalize } from 'rxjs/operators';
import { StoreService } from './store.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from 'src/app/shared/models/store';
import { MatTabChangeEvent } from '@angular/material/tabs';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})

export class StoreComponent implements OnInit, OnDestroy {
  store!: Store;
  storeId!: string;
  public selectedTab = 0;
  // Private
  private _unsubscribeAll: Subject<any>;



  constructor(
    private storeService: StoreService,
    private _location: Location,
    private _matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._unsubscribeAll = new Subject();
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
