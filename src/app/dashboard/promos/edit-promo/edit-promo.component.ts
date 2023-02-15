import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MediaComponent } from '../../media/media.component';
import { Location } from '@angular/common';
import { PromosService } from 'src/app/shared/services/promo.service';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { StoresService } from '../../stores/stores.service';
import { Store } from 'src/app/shared/models/store';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map, Observable, startWith } from 'rxjs';
import { Promo } from 'src/app/shared/models/promo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-promo',
  templateUrl: './edit-promo.component.html',
  styleUrls: ['./edit-promo.component.scss']
})
export class EditPromoComponent implements OnInit {

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
  promo: Promo
  promoForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private promosService: PromosService,
    private usersService: UsersService,
    private storesService: StoresService,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
   this.promo =  this.route.snapshot.data['promo'] as Promo;
this.promoForm =   this.fb.group({
    image: [this.promo.image, Validators.required],
    codeName: [this.promo.codeName, Validators.required],
    code: [this.promo.code, Validators.required],
    customers: this.fb.array([]),
    vendors: this.fb.array([]),
    showInCustomerApp: [this.promo.showInCustomerApp, Validators.required],
    flatDiscount: [this.promo.flatDiscount, Validators.required],
    flatDiscountAmount: [this.promo.flatDiscountAmount, Validators.required],
    discountType: [this.promo.discountType],
    discount: [this.promo.discount, Validators.required],
    startTime: [this.promo.startTime, Validators.required],
    endTime: [this.promo.endTime, Validators.required],
    maximumDiscountAmount: [this.promo.maximumDiscountAmount, Validators.required],
    minimumOrderAmount: [this.promo.minimumOrderAmount, Validators.required],
    redeemCount: [this.promo.redeemCount],
    promoCodeDescription: [this.promo.promoCodeDescription, Validators.required],
    textCodeDescription: [this.promo.textCodeDescription, Validators.required],
    enabled: [this.promo.enabled, Validators.required],
  });

    this.getStores()
    this.getCustomers()
    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.promo.image

    this.filteredCustomers = this.customerCtrl.valueChanges.pipe(
      startWith(null),
      map((customer: string | null) => customer ? this._filter(customer) : this.customers.slice()));

      this.filteredStores = this.storeCtrl.valueChanges.pipe(
        startWith(null),
        map((store: string | null) => store ? this._filterStore(store) : this.stores.slice()));
         this.selectedCustomers = this.promo.customers;
         this.selectedStores = this.promo.vendors;
        for (const vendor of  this.selectedCustomers) {
           this.getCustomersForm.push(this.fb.control(vendor._id))
        }

        for (const customer of  this.selectedStores) {
          this.getStoresForm.push(this.fb.control(customer._id))
       }
        
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
      this.promosService.updatePromo(this.promo._id, this.promoForm.getRawValue()).subscribe((data) => {
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
