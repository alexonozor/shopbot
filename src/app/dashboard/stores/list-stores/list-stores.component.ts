import { Component, ElementRef, OnInit, Pipe, PipeTransform, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { StoresService } from '../stores.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { AddStoresComponent } from '../modals/add-stores/add-stores.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StoreService } from '../details/store.service';
import { Merchant } from 'src/app/shared/models/merchant';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { Role } from 'src/app/shared/models/role';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss'],
})
export class ListStoresComponent implements OnInit {
  displayedColumns = ['name', 'description', 'active', 'action'];
  public stores: Store[] = [];
  confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  merchants: Merchant[];
  categories: Category[];
  filterForm!: FormGroup;
  name!: string;
  Role = Role
  
  constructor(
    private storesService: StoresService,
    private storeService: StoreService,
    public _matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public auth: AuthService,
  ) {
    this.merchants = this.route.snapshot.data['merchants'] as Merchant[],
    this.categories = this.route.snapshot.data['categories'] as Category[]
   }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.stores = this.storesService.stores;
    this.filterForm = this.fb.group({
      active: new FormControl(true),
      category: new FormControl(''),
      'contactInfo.country': new FormControl(''),
    });
    this.filterSet();
  }

  delete(index: number, id: any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Store?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this store?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storesService.deleteStore(index, id).subscribe()
      }
      this.confirmDialogRef = null;
    });
  }

  addNewStore() {
    let addStoreForm = this._matDialog.open(AddStoresComponent, {
      width: '500px',
      disableClose: false,
      data: this.merchants
    });
    addStoreForm.afterClosed().subscribe(result => {

      if (result) {
        this.storesService.getUserStores({data: { $match: {} }, control: [{ $sort: { 'createdAt': -1 }}]}).then(() => {
          this.stores = this.storesService.stores;
        })
      }
    });
  }

  
  filterSet() {
    this.filterForm.valueChanges.subscribe((value) => {
         this.filterObject(value)
         this.storesService.getUserStores({data: { $match: {  ...this.filterObject(value) } }, control: [{ $sort: { 'createdAt': -1 }}]})
         .then(() => {
          this.stores = this.storesService.stores;
    }) 
    })
   
  }

  clearFilerSet() {
    this.filterForm.patchValue({
      name: '',
      active: '',
      category: '',
      'contactInfo.country': '',
    })
   
  }

   filterObject(obj:any): any {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null && value !== '')
    );
  }

  


  onChange(store: Store, event: MatSlideToggleChange) {
    this.storeService.saveStore({approve: event.checked, active: event.checked }, store._id).subscribe(() => {
      this._matDialog
    })
  }

  onChangeFeatured(store: Store, event: MatSlideToggleChange) {
    this.storeService.saveStore({featured: event.checked }, store._id).subscribe(() => {
      this._matDialog
    })
  }

  public viewDetails(store: Store) {
    this.router.navigate(['dashboard', 'stores', store._id, 'explore']);
  }


}


@Pipe({name: 'filterByName'})
export class filterNames implements PipeTransform {
  transform(stores: Store[], name = ''): any {
    return stores.filter(n => {
		return n.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
	});
  }
}


