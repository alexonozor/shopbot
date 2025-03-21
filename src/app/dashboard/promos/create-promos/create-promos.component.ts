import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MediaComponent } from '../../media/media.component';
import { CommonModule, Location } from '@angular/common';
import { PromosService } from 'src/app/shared/services/promo.service';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { StoresService } from '../../stores/stores.service';
import { Store } from 'src/app/shared/models/store';
import { MatAutocomplete, MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { Cuisine } from 'src/app/shared/models/cuisine';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-promos',
  templateUrl: './create-promos.component.html',
  styleUrls: ['./create-promos.component.scss'],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    SelectMediaComponent,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class CreatePromosComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  customerCtrl = new FormControl();
  storeCtrl = new FormControl();
  filteredCustomers!: Observable<User[]>;
  filteredStores!: Observable<Store[]>;
  isLoading: boolean = false;
  selectedCustomers: User[] = [];
  selectedStores: Store[] = [];


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  
  @ViewChild('customerInput', {static: false}) customerInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete!: MatAutocomplete;
  @ViewChild('storeInput', {static: false}) storeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('storeAuto', {static: false}) matAutocompleteStore!: MatAutocomplete;
  

  mediaData:any;
  customers: User[] = [];
  stores:  Store[] = [];
  promoForm = this.fb.group({
    image: ['', Validators.required],
    codeName: ['', Validators.required],
    code: ['', Validators.required],
    customers: this.fb.array([]),
    vendors: this.fb.array([]),
    showInCustomerApp: [false, Validators.required],
    flatDiscount: [false, Validators.required],
    flatDiscountAmount: [0, Validators.required],
    discountType: [''],
    discount: [0, Validators.required],
    startTime: [this.range.value.start, Validators.required],
    endTime: [this.range.value.end, Validators.required],
    maximumDiscountAmount: [0, Validators.required],
    minimumOrderAmount: [0, Validators.required],
    redeemCount: ['', Validators.required],
    promoCodeDescription: ['', Validators.required],
    textCodeDescription: ['', Validators.required],
    published: [false, Validators.required],
  });


  constructor(
    private fb: FormBuilder,
    private promosService: PromosService,
    private usersService: UsersService,
    private storesService: StoresService,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.getStores()
    this.getCustomers()
    this.mediaData = { image:null, icon:null };

    this.filteredCustomers = this.customerCtrl.valueChanges.pipe(
      startWith(null),
      map((customer: string | null) => customer ? this._filter(customer) : this.customers.slice()));

      this.filteredStores = this.storeCtrl.valueChanges.pipe(
        startWith(null),
        map((store: string | null) => store ? this._filterStore(store) : this.stores.slice()));
  }


  get getCustomersForm() {
    return this.promoForm.get('customers') as FormArray
  }

  get getStoresForm() {
    return this.promoForm.get('vendors') as FormArray
  }

  
  ngOnInit(): void {}


  private _filter(value: any): User[]  {
    if (typeof value == 'string') {
      const filterValue = value?.toLowerCase();
      return this.customers?.filter(customer => customer?.name?.toLowerCase().indexOf(filterValue) === 0);
    } else {
      const filterValue = value.name.toLowerCase();
      return this.customers?.filter(customer => customer?.name?.toLowerCase().indexOf(filterValue) === 0);
    }
   
  }

  private _filterStore(value: any): Store[]  {
    if (typeof value == 'string') {
      const filterValue = value?.toLowerCase();
       return this.stores?.filter(store => store?.name?.toLowerCase().indexOf(filterValue) === 0);
    } else {
      const filterValue = value.name.toLowerCase();
      return this.stores?.filter(store => store?.name?.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  removeStore(store: Store): void {
    const index = this.selectedStores.indexOf(store);
    if (index >= 0) {
      this.selectedStores.splice(index, 1);
      this.getStoresForm.removeAt(index)
    }
  }


  remove(customer: User): void {
    const index = this.selectedCustomers.indexOf(customer);
    if (index >= 0) {
      this.selectedCustomers.splice(index, 1);
      this.getCustomersForm.removeAt(index)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCustomers.push(event.option.value);
    this.getCustomersForm.push(this.fb.control(event.option.value._id))
    this.customerInput.nativeElement.value = '';
    this.customerCtrl.setValue(null);
  }

  selectedStore(event: MatAutocompleteSelectedEvent): void {
    this.selectedStores.push(event.option.value);
    this.getStoresForm.push(this.fb.control(event.option.value._id))
    this.storeInput.nativeElement.value = '';
    this.storeCtrl.setValue(null);
  }

  submit() {
    if (this.promoForm.valid) {
      this.isLoading = true
      this.promosService.createPromo(this.promoForm.getRawValue()).subscribe((data) => {
        this.isLoading = false;
        this.location.back();
      })
    }
  }

  getCustomers() {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.customers = users
    })
  }

  getStores() {
    this.storesService.getStores({data: { $match: {} }, control: [{ $sort: { 'createdAt': -1 }}]}).subscribe((stores: Store[]) => {
      this.stores = stores
    })
  }

  back() {
    this.location.back();
  }

  addMedia(property:string) {
    const dialogRef = this.dialog.open(MediaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.promoForm.patchValue({ [property]: result.url  })
         const value = {[property]: result}
         this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property:string) {
    this.promoForm.patchValue({ [property]: null  })
    this.mediaData[property] = null;
  }
}
