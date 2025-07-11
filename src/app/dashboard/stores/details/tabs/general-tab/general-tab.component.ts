import { Component, Input, NgZone, OnInit } from '@angular/core';
import { Store } from 'src/app/shared/models/store';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../../store.service';
import { finalize } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/models/category';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-general-settings-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [
    StoreService
  ]
})
export class GeneralTabComponent implements OnInit {
  protected store!: Store |  any;
  lat = 51.678418;
  lng = 7.809007;
  zoom: number = 8;
  generalSettingForm!: FormGroup;
  fileName!: string;
  uploadSub: any;
  product: any;
  uploadProgress!: any;
  uploadProgressBanner!: any;
  uploadSubBanner: any;
  isLoading: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;
  categories!: Category[]
  countriesWithStates: any[] = [];

  states: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private storeService: StoreService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.store = this.route.parent?.parent?.snapshot.data['store'] as Store
    this.categories = this.route.parent?.parent?.snapshot.data['categories']
    this.countriesWithStates = this.route.parent?.parent?.snapshot.data['deliveryZones'];
  }

  ngOnInit(): void {
    this.lat = this.store.location.coordinates[0];
    this.lng = this.store.location.coordinates[1];
    this.generalSettingForm = this.createGeneralSettingForm();
    this.generalSettingForm = this.createGeneralSettingForm();
    // Subscribe to changes in the 'country' form control
    this.generalSettingForm?.get('contactInfo.country')?.valueChanges.subscribe((selectedCountry) => {
    const matchingCountry = this.countriesWithStates.find(item => item.country === selectedCountry);
      if (matchingCountry) {
        this.states = matchingCountry.states
      } 
    });

    this.generalSettingForm?.get('contactInfo')?.patchValue({country: this.store.contactInfo.country})
  }


  createGeneralSettingForm(): FormGroup {
    return this._formBuilder.group({
      logo: [this.store.logo],
      bannerImage: [this.store.bannerImage],
      name: [this.store.name, Validators.required],
      description: [this.store.description, Validators.required],
      category: [this.store.category[0]?._id, Validators.required],
      currency: [this.store.currency, Validators.required],
      currencyCode: [this.store.currencyCode, Validators.required],
      expensive: [this.store.expensive, Validators.required],

      finance: this._formBuilder.group({
        financeType: [this.store?.finance?.financeType,  Validators.required],
        adminCommission: [this.store?.finance?.adminCommission, Validators.required],
      }),

      notifications: this._formBuilder.group({
        email: [this.store.notifications.email],
        phone: [this.store.notifications.phone],
        sms: [this.store.notifications.sms],
      }),

      contactInfo: this._formBuilder.group({
        email: [this.store.contactInfo.email, [Validators.required]],
        phone: [this.store.contactInfo.phone, [Validators.required]],
        city: [this.store.contactInfo.city],
        country: [this.store.contactInfo.country],
        state: [this.store.contactInfo.state],
        postalCode: [this.store.contactInfo.postalCode],
        placeName: [this.store.contactInfo.placeName],
        placeNumber: [this.store.contactInfo.placeNumber]
      }),

      location: this._formBuilder.group({
        type: 'Point',
        coordinates: [this.store.location.coordinates]
      })
    })
  }


  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.generalSettingForm.patchValue({ location: { coordinates: [this.lat, this.lng] } })
      });
    }
  }

  onAutocompleteSelected(result:any) {
  }

  onLocationSelected(location: Location) {
    // this.lat = location.latitude;
    // this.lng = location.longitude;
    this.generalSettingForm.patchValue({ location: { coordinates: [this.lat, this.lng] } })
  }



  onFileLogoSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);

      const upload$ = this.storeService.uploadLogo(formData, this.store._id)
        .pipe(
          finalize(() => this.reset())
        );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        } else if (event.hasOwnProperty('body')) {
          this.store.logo = event.body.photo;
        }
      })
    }

  }

  onFileBannerSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      const upload$ = this.storeService.uploadBanner(formData, this.store._id)
        .pipe(
          finalize(() => this.resetBanner())
        );
      this.uploadSubBanner = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgressBanner = Math.round(100 * (event.loaded / event.total));
        } else if (event.hasOwnProperty('body')) {
          this.store.bannerImage = event.body.photo;
        }
      })
    }
  }

  save() {
    this.isLoading = true;
    const formValue = this.generalSettingForm.getRawValue();
    
    // Convert coordinates string to array if it's a string
    if (typeof formValue.location.coordinates === 'string') {
      formValue.location.coordinates = formValue.location.coordinates
        .split(',')
        .map((coord: string) => parseFloat(coord.trim()));
    }
    
    this.store.paused = !this.store.paused;
    this.storeService.saveStore(formValue, this.store._id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((store) => {
        this._snackBar.open('Saved', 'ok', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.storeService.getStore()
        this.storeService.onStoreChanged
      })
  }

  resetBanner() {
    this.uploadProgressBanner = null;
    this.uploadSubBanner = null;
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

}
