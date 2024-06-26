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
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/shared/models/offer';
import { MenusService } from '../../stores/details/tabs/products-tab/categories/list/menus.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {
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
  offer: Offer



  constructor(
    private fb: FormBuilder,
    private offersService: OffersService,
    private usersService: UsersService,
    private storesService: StoresService,
    private location: Location,
    public dialog: MatDialog,
    public menuService: MenusService,
    private route: ActivatedRoute,
  ) {
    this.offer = this.route.snapshot.data['offer'] as Offer;
    this.selectedStore = this.offer.store;
    this.selectMenu = this.offer.menu;
    
    this.getStores()
    this.getMenu(this.selectedStore._id)
    this.promoForm = this.fb.group({
      image: [this.offer?.image],
      menu: [this.offer?.menu?._id],
      applicableType: [this.offer?.applicableType],
      quantityForFree: [this.offer?.quantityForFree],
      quantityToOrder: [this.offer?.quantityToOrder],
      food: [this.offer?.food?._id],
      offerType: [this.offer?.offerType, Validators.required],
      offerPeriodType: [this.offer?.offerPeriodType, Validators.required],
      offerPeriodDays: this.fb.array([]),
      store: [this.offer?.store?._id],
      amount: [this.offer?.amount],
      discount: [this.offer?.discount],
      startTime: [this.offer?.startTime],
      endTime: [this.offer?.endTime],
      enabled: [this.offer?.enabled],
      description: [this.offer?.description, Validators.required],
    });


    this.offer.offerPeriodDays.forEach((item) => {
      this.addOfferPeriods(item)
    })
    this.mediaData = { image: this.offer?.image, icon: null };
    this.filteredMenus = this.menuCtrl.valueChanges.pipe(
      startWith(null),
      map((menu: string | null) => menu ? this._filter(menu) : this.menus.slice()));
    this.filteredStores = this.storeCtrl.valueChanges.pipe(
      startWith(null),
      map((store: string | null) => store ? this._filterStore(store) : this.stores.slice()));
  }


  addOfferPeriods(item: any) {
    const lessonForm = this.fb.group({ day: item.day, active: item.active, startDate: new Date(item.startDate), endDate: new Date(item.endDate) });
    this.offerPeriods.push(lessonForm);
  }

  get offerPeriods() {
    return this.promoForm.controls["offerPeriodDays"] as FormArray;
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
      formValue.menu = <any>this.selectMenu?._id;
      this.isLoading = true
      this.offersService.updateOffer(this.offer._id, formValue).subscribe((data) => {
        this.isLoading = false;
        this.location.back();
      })
    }
  }

  public objectComparisonFunction( option:any, value:any ) : boolean {
    return option.id === value.id;
  }

  selectStore(event: any) {
      this.getMenu(event.value);
  }

  getMenu(id:string) {
    // if (this.selectedStore) {
      this.menuService.getStoreMenus(id).subscribe((menu: any) => {
        this.menus = menu as Menu[]
      })
    // }
  }

  selectedMenu(event: any) {
    this.selectMenu = event.value as Menu;
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
