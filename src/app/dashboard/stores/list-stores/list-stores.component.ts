import {
  Component,
  ElementRef,
  inject,
  OnInit,
  Pipe,
  PipeTransform,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  takeUntil,
} from 'rxjs/operators';
import { StoresService } from '../stores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { AddStoresComponent } from '../modals/add-stores/add-stores.component';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StoreService } from '../details/store.service';
import { Merchant } from 'src/app/shared/models/merchant';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { Role } from 'src/app/shared/models/role';
import { AuthService } from 'src/app/shared/services/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Pipe({ name: 'filterByName' })
export class filterNames implements PipeTransform {
  transform(stores: Store[], name = ''): any {
    return stores.filter((n) => {
      return n.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    });
  }
}

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    MatMenuModule,
    filterNames,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ListStoresComponent implements OnInit {
  private storesService = inject(StoresService);
  private storeService = inject(StoreService);
  public _matDialog = inject(MatDialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  public auth = inject(AuthService);
  public confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  public merchants = this.route.snapshot.data['merchants'] as Merchant[];
  public categories = this.route.snapshot.data['categories'] as Category[];
  public filterForm = this.fb.group({
    active: [true],
    category: [''],
    contactInfo: this.fb.group({
      country: [''],
    }),
  });
  public stores = this.storesService.stores || [];
  public formValue = toSignal(this.filterForm.valueChanges)

  name!: string;
  Role = Role;

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe((filters) => {
      this.applyFilters();
    });
  }

  delete(index: number, id: any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false,
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Store?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete this store?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.storesService.deleteStore(index, id).subscribe();
      }
      this.confirmDialogRef = null;
    });
  }

  addNewStore() {
    let addStoreForm = this._matDialog.open(AddStoresComponent, {
      width: '500px',
      disableClose: false,
      data: this.merchants,
    });
    addStoreForm.afterClosed().subscribe((result) => {
      if (result) {
        this.storesService
          .getUserStores({})
          .then(() => {
            this.stores = this.storesService.stores;
          });
      }
    });
  }

  filterSet() {
    this.filterForm.valueChanges.subscribe((value) => {
      this.storesService
        .getUserStores({
          data: { $match: { ...this.filterObject(value) } },
          control: [{ $sort: { createdAt: -1 } }],
        })
        .then(() => {
          this.stores = this.storesService.stores;
        });
    });
  }

  clearFilerSet() {
    // this.filterForm.patchValue({
    //   name: '',
    //   active: true,
    //   category: '',
    //   'contactInfo.country': '',
    // })
  }

  filterObject(obj: any): any {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ''
      )
    );
  }

  applyFilters() {
    const filters = this.filterForm.value;
    const filter = this.filterObject(filters)
    console.log(filter)
    // Apply your filtering logic here based on the filters
    // You might want to call your API with these filters or filter the local data
  }

  clearFilters() {
    this.filterForm.reset();
    this.name = '';
    // Reset to original data or reload from API
  }

  onChange(store: Store, event: any) {
    this.storeService
      .saveStore({ approve: event.checked, active: event.checked }, store._id)
      .subscribe(() => {
        this._matDialog;
      });
  }

  onChangeFeatured(store: Store, event: any) {
    this.storeService
      .saveStore({ featured: event.checked }, store._id)
      .subscribe(() => {
        this._matDialog;
      });
  }

  public viewDetails(store: Store) {
    this.router.navigate(['dashboard', 'stores', store._id, 'explore']);
  }
}

