import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannersService } from '../../../shared/services/banners.service';
import { CommonModule, Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'src/app/shared/models/store';
import { Observable } from 'rxjs';
import { map, switchMap, debounceTime, startWith } from 'rxjs/operators';
import { StoresService } from '../../stores/stores.service';
import { Menu } from '../../../shared/models/menu';
import { StoreService } from '../../stores/details/store.service';
import { DeliveryZone } from '../../../shared/models/delivery-zone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenusService } from '../../stores/details/tabs/products-tab/categories/list/menus.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-banners',
  templateUrl: './create-banners.component.html',
  styleUrls: ['./create-banners.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    SelectMediaComponent,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class CreateBannersComponent implements OnInit {
  mediaData: any;
  bannerForm: FormGroup;
  storesCtrl = new FormControl('');
  stores: Store[] = [];
  filteredStores!: Observable<Store[]>;
  menus: Menu[] = []
  menus$!: Observable<Menu[]>;
  selectedMenu: Menu | any;
  deliveryZones!: DeliveryZone[];
  selectedZone!: DeliveryZone;

  constructor(
    private fb: FormBuilder,
    private bannerService: BannersService,
    private location: Location,
    public dialog: MatDialog,
    public storesService: StoresService,
    public menusService: MenusService,
    public storeService: StoreService,
    public route: ActivatedRoute
  ) {
    this.deliveryZones = this.route.snapshot.data['deliveryZones'] as DeliveryZone[]
    this.mediaData = { image: null, icon: null };
    this.bannerForm = this.fb.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      active: [false, Validators.required],
      category: ['', Validators.required],
      link: [''],
      shortDescription: ['', Validators.required],
      showOnSlider: [false, Validators.required],
      storeId: [''],
      menuId: [''],
      productId: [''],
      country: ['', Validators.required],
      states: ['', Validators.required]
    });
  }


  selectedCountry(event:any) {
   this.selectedZone =  this.deliveryZones.find((zone) => zone.country == event.value) as DeliveryZone
  }

  ngOnInit(): void {
    this.filteredStores = this.storesCtrl.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      switchMap(name => this.storesService.search(name))
    );
  }

  submit() {
    if (this.bannerForm.valid) {
      this.bannerService.createBanner(this.bannerForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  onShopSelectionChanged(event: any) {
    this.bannerForm.patchValue({ storeId: event.option.id })
    this.getStoreMenu(event.option.id)
  }

  getStoreMenu(storeId: string) {
    this.menus$ = this.menusService.getStoreMenus(storeId).pipe(map((menus) => this.menus = menus))
  }

  changeMenu(event: any) {
    this.selectedMenu = this.menus.find((menu) => menu._id == event.source.value)
  }

  back() {
    this.location.back()
  }


  displayFn(shop: Store): string {
    return shop.name;
  }

  selectedStore(event: any) {
    console.log(event.option.value)
  }

  addMedia(property: string) {
    const dialogRef = this.dialog.open(MediaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bannerForm.patchValue({ [property]: result.url })
        const value = { [property]: result }
        this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property: string) {
    this.bannerForm.patchValue({ [property]: null })
    this.mediaData[property] = null;
  }

}