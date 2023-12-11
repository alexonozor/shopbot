import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BannersService } from 'src/app/shared/services/banners.service';
import { MediaComponent } from '../../media/media.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Banner } from '../../../shared/models/banner';
import { Store } from 'src/app/shared/models/store';
import {Observable} from 'rxjs';
import {map, switchMap, debounceTime, startWith} from 'rxjs/operators';
import { StoresService } from '../../stores/stores.service';
import { Menu } from '../../../shared/models/menu';
import { MenusService } from '../../stores/details/tabs/menus/list/menus.service';
import { StoreService } from '../../stores/details/store.service';
import { DeliveryZone } from '../../../shared/models/delivery-zone';

@Component({
  selector: 'app-edit-banners',
  templateUrl: './edit-banners.component.html',
  styleUrls: ['./edit-banners.component.scss']
})
export class EditBannersComponent implements OnInit {

  banner:Banner;
  bannerForm!:FormGroup;
  mediaData:any;
  storesCtrl = new FormControl('');
  stores: Store[] = [];
  filteredStores!: Observable<Store[]>;
  menus: Menu[] = []
  menus$!: Observable<Menu[]>;
  selectedMenu:Menu | any;
  storeId!: string;
  deliveryZones!: DeliveryZone[];
  selectedZone!: DeliveryZone;

  constructor(
    private fb: FormBuilder,
    private bannerService: BannersService,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    public storesService: StoresService,
    public storeService: StoreService,
    public menusService: MenusService
  ) {
   this.banner = this.route.snapshot.data['banner'] as Banner;
   this.deliveryZones = this.route.snapshot.data['deliveryZones'] as DeliveryZone[]

   this.selectedCountry(this.banner.country)
   this.mediaData = { image:null, icon:null };
   this.bannerForm = this.fb.group({
    image: [this.banner.image, Validators.required],
    title: [this.banner.title, Validators.required],
    active: [this.banner.active, Validators.required],
    category: [this.banner.category, Validators.required],
    link: [this.banner.link],
    showOnSlider: [this.banner.showOnSlider, Validators.required],
    shortDescription: [this.banner.shortDescription, Validators.required],
    storeId: [this.banner.storeId],
    menuId: [this.banner.menuId],
    productId: [this.banner.productId],
    country: [this.banner.country, Validators.required],
    states: [this.banner.states, Validators.required]
  });
    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.banner.image
  }

  ngOnInit(): void {
    if (this.bannerForm.value.category == 'Product') {
      this.storeId = this.bannerForm.value.storeId;
      this.storeService.getStore(this.bannerForm.value.storeId).then((store) => {
        this.filteredStores = this.storesCtrl.valueChanges.pipe(
          startWith(store.name),
          debounceTime(500),
          switchMap(store => this.storesService.search(store))
        );
        this.bannerForm.patchValue({storeId: store.name})
        this.getStoreMenu(store._id);
      })
    }
  }

  selectedCountry(value:string) {
    if (value) {
      this.selectedZone =  this.deliveryZones.find((zone) => zone.country == value) as DeliveryZone
    }
   }

  onShopSelectionChanged(event:any) {
    this.bannerForm.patchValue({storeId: event.option.value})
    this.getStoreMenu(event.option.id)
    this.storeId = event.option.id;
  }

  getStoreMenu(storeId:string) {
   this.menus$ = this.menusService.getStoreMenus(storeId).pipe(map((menus) => {
    this.menus = menus;
    this.selectedMenu = this.menus.find((menu) => menu._id == this.banner.menuId);
    return menus;
  }))
  }



  

  changeMenu(event:any) {
    this.selectedMenu = this.menus.find((menu) => menu._id == event.source.value)
  }

  submit() {
    if (this.bannerForm.valid) {
      this.bannerForm.patchValue({storeId: this.storeId})
      this.bannerService.updateBanner(this.banner._id, this.bannerForm.getRawValue()).subscribe((data:any) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

  addMedia(property:string) {
    const dialogRef = this.dialog.open(MediaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bannerForm.patchValue({ [property]: result.url  })
         const value = {[property]: result}
         this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property:string) {
    this.bannerForm.patchValue({ [property]: null  })
    this.mediaData[property] = null;
  }


}
