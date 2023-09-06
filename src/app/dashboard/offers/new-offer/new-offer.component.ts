import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { User } from 'src/app/shared/models';
import { Store } from 'src/app/shared/models/store';
import { OffersService } from 'src/app/shared/services/offers.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { MediaComponent } from '../../media/media.component';
import { StoresService } from '../../stores/stores.service';
import { Location } from '@angular/common';
import { Menu } from '../../../shared/models/menu';
import { MenusService } from '../../stores/details/tabs/menus/list/menus.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.scss']
})
export class NewOfferComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  menuCtrl = new FormControl();
  storeCtrl = new FormControl();
  filteredMenus!: Observable<Menu[]>;
  filteredStores!: Observable<Store[]>;
  isLoading: boolean = false;
  selectedCustomers: Menu[] = [];
  selectedStore!: Store;
  selectMenu!: Menu;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public panelOpenState: boolean = false
  public availableDays = [
    { day: "Sunday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Monday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Tuesday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Wednesday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Thursday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Friday", active: true, startDate: new Date(), endDate: new Date() },
    { day: "Saturday", active: true, startDate: new Date(), endDate: new Date() }
  ]

  public filteredDays: any[] = [];

  @ViewChild('customerInput', { static: false }) customerInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete!: MatAutocomplete;
  @ViewChild('storeInput', { static: false }) storeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('storeAuto', { static: false }) matAutocompleteStore!: MatAutocomplete;
  mediaData: any;
  menus: Menu[] = [];
  stores: Store[] = [];
  promoForm: FormGroup;
  activeDays: any;



  constructor(
    private fb: FormBuilder,
    private offersService: OffersService,
    private usersService: UsersService,
    private storesService: StoresService,
    private location: Location,
    public dialog: MatDialog,
    public menuService: MenusService
  ) {

    this.promoForm = this.fb.group({
      image: [''],
      menu: [null],
      food: [null],
      offerType: ['', Validators.required],
      offerPeriodType: ['', Validators.required],
      offerPeriodDays: this.fb.array([]),
      store: [''],
      discount: [0, Validators.required],
      startTime: [this.range.value.start],
      endTime: [this.range.value.end],
      description: ['', Validators.required],
    });


    this.availableDays.forEach((item) => {
      this.addOfferPeriods(item)
    })

    this.getStores()
    this.mediaData = { image: null, icon: null };
    this.filteredMenus = this.menuCtrl.valueChanges.pipe(
      startWith(null),
      map((menu: string | null) => menu ? this._filter(menu) : this.menus.slice()));
    this.filteredStores = this.storeCtrl.valueChanges.pipe(
      startWith(null),
      map((store: string | null) => store ? this._filterStore(store) : this.stores.slice()));
  }


  addOfferPeriods(item: any) {
    const lessonForm = this.fb.group({ day: item.day, active: item.active, startDate: item.startDate, endDate: item.endDate });
    this.offerPeriods.push(lessonForm);
  }

  get offerPeriods() {
    return this.promoForm.controls["offerPeriodDays"] as FormArray
  }


  ngOnInit(): void { }


  private _filter(value: any): Menu[] {
    if (typeof value == 'string') {
      const filterValue = value?.toLowerCase();
      return this.menus?.filter(menu => menu?.name?.toLowerCase().indexOf(filterValue) === 0);
    } else {
      const filterValue = value.name.toLowerCase();
      return this.menus?.filter(menu => menu?.name?.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  private _filterStore(value: any): Store[] {
    if (typeof value == 'string') {
      const filterValue = value?.toLowerCase();
      return this.stores?.filter(store => store?.name?.toLowerCase().indexOf(filterValue) === 0);
    } else {
      const filterValue = value.name.toLowerCase();
      return this.stores?.filter(store => store?.name?.toLowerCase().indexOf(filterValue) === 0);
    }

  }

  displayFn(state: any) {
    return state?.name;
  }

  submit() {
    if (this.promoForm.valid) {
      let formValue = this.promoForm.getRawValue();
      formValue.store = this.selectedStore._id
      formValue.menu = <any>this.selectMenu?._id;
      this.isLoading = true
      this.offersService.createOffer(formValue).subscribe((data) => {
        this.isLoading = false;
        this.location.back();
      })
    }
  }

  selectStore(event: any) {
    this.selectedStore = event.option.value;
    setTimeout(() => {
      this.getMenu();
    }, 2000)

  }

  getMenu() {
    if (this.selectedStore) {
      this.menuService.getStoreMenus(this.selectedStore._id).subscribe((menu: any) => {
        this.menus = menu as Menu[]
      })
    }
  }

  selectedMenu(event: any) {
    this.selectMenu = event.option.value as Menu;

  }



  getStores() {
    this.storesService.getStores({ data: { $match: {} }, control: [{ $sort: { 'createdAt': -1 } }] }).subscribe((stores: Store[]) => {
      this.stores = stores
    })
  }

  back() {
    this.location.back();
  }

  addMedia(property: string) {
    const dialogRef = this.dialog.open(MediaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.promoForm.patchValue({ [property]: result.url })
        const value = { [property]: result }
        this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property: string) {
    this.promoForm.patchValue({ [property]: null })
    this.mediaData[property] = null;
  }
}
