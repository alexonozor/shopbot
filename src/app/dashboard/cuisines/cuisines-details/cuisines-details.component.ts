import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CuisinesService } from 'src/app/shared/services/cuisines.service';
import { MediaComponent } from '../../media/media.component';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cuisine } from '../../../shared/models/cuisine';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-cuisines-details',
  templateUrl: './cuisines-details.component.html',
  styleUrls: ['./cuisines-details.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatPaginatorModule,
    SelectMediaComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class CuisinesDetailsComponent implements OnInit {

  cuisine:Cuisine;
  cuisineForm!:FormGroup;
  mediaData:any;
  deliveriesZones!: DeliveryZone[];
  selectedZone!: DeliveryZone;

  constructor(
    private fb: FormBuilder,
    private cuisineService: CuisinesService,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
   this.cuisine = this.route.snapshot.data['cuisine'] as Cuisine;
   this.mediaData = { image:null, icon:null };
   this.cuisineForm = this.fb.group({
      name: [this.cuisine.name, Validators.required],
      status: [this.cuisine.status, Validators.required],
      image: [this.cuisine.image, Validators.required],
      // country: [this.cuisine.country, Validators.required],
      // states: [this.cuisine.states, Validators.required],
      countries: [this.cuisine.countries, Validators.required],
    });
   

    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.cuisine.image
  }

  ngOnInit(): void {
    this.deliveriesZones = this.route.snapshot.data['deliveriesZones'] as DeliveryZone[];
    // this.selectedCountry(this.cuisine.country)
  }

  selectedCountry(value:string) {
    this.selectedZone =  this.deliveriesZones.find((zone) => zone.country == value) as DeliveryZone
   }

  submit() {
    if (this.cuisineForm.valid) {
      this.cuisineService.updateCuisine(this.cuisine._id, this.cuisineForm.getRawValue()).subscribe((data) => {
        this.location.back()
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
        this.cuisineForm.patchValue({ [property]: result.url  })
         const value = {[property]: result}
         this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property:string) {
    this.cuisineForm.patchValue({ [property]: null  })
    this.mediaData[property] = null;
  }


}
