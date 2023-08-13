import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BannersService } from '../../../shared/services/banners.service';
import { Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'src/app/shared/models/store';
import { Observable } from 'rxjs';
import { map, switchMap, debounceTime, startWith } from 'rxjs/operators';
import { StoresService } from '../../stores/stores.service';
import { Menu } from '../../../shared/models/menu';
import { MenusService } from '../../stores/details/tabs/menus/list/menus.service';
import { StoreService } from '../../stores/details/store.service';

@Component({
  selector: 'app-create-banners',
  templateUrl: './create-banners.component.html',
  styleUrls: ['./create-banners.component.scss']
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

  constructor(
    private fb: FormBuilder,
    private bannerService: BannersService,
    private location: Location,
    public dialog: MatDialog,
    public storesService: StoresService,
    public menusService: MenusService,
    public storeService: StoreService
  ) {
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
      cities: ['', Validators.required]
    });
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