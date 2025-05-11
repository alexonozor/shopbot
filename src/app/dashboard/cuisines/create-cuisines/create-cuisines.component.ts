import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { CuisinesService } from '../../../shared/services/cuisines.service';
import { CommonModule, Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { ActivatedRoute } from '@angular/router';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-create-cuisine',
  templateUrl: './create-cuisines.component.html',
  styleUrls: ['./create-cuisines.component.scss'],
  imports: [
    CommonModule,
    SelectMediaComponent,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule
  ]
})
export class CreateCuisinesComponent implements OnInit {
  mediaData:any;
  cuisineForm!: FormGroup;
  deliveriesZones!: DeliveryZone[];
  selectedZone!: DeliveryZone;

  constructor(
    private fb: FormBuilder,
    private cuisineService: CuisinesService,
    private location: Location,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.mediaData = { image:null, icon:null };
  }

  ngOnInit(): void {
    this.deliveriesZones = this.route.snapshot.data['deliveriesZones'] as DeliveryZone[]
    this.cuisineForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      image: ['', Validators.required],
      countries: ['', Validators.required],
      // states: ['', Validators.required],
    });
  }

  submit() {
    if (this.cuisineForm.valid) {
      this.cuisineService.createCuisine(this.cuisineForm.getRawValue()).subscribe((data) => {
        this.location.back()
      })
    }
  }

  selectedCountry(event:any) {
    this.selectedZone =  this.deliveriesZones.find((zone) => zone.country == event.value) as DeliveryZone
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
