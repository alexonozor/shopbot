import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import {CategoriesService } from '../../../shared/services/category.service';
import { Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {
  mediaData:any;
  categoryForm = this.fb.group({
    name: ['', Validators.required],
    status: ['', Validators.required],
    image: ['', Validators.required],
    country: ['', Validators.required],
    states: ['', Validators.required],
    countries: ['', Validators.required],
  });
  deliveryZones: DeliveryZone[];
  selectedZone!: DeliveryZone;

  constructor(
    private fb: FormBuilder,
    private categoryService:CategoriesService,
    private location: Location,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.deliveryZones = this.route.snapshot.data['deliveryZones'] as DeliveryZone[]
    this.mediaData = { image:null, icon:null };
  }

  selectedCountry(event:any) {
    this.selectedZone = this.deliveryZones.find((zone) => zone.country == event.value) as DeliveryZone
   }

  ngOnInit(): void {}

  submit() {
    if (this.categoryForm.valid) {
      this.categoryService.createCategory(this.categoryForm.getRawValue()).subscribe((data) => {
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
        this.categoryForm.patchValue({ [property]: result.url  })
         const value = {[property]: result}
         this.mediaData[property] = value[property];
      }
    });
  }

  removeValue(property:string) {
    this.categoryForm.patchValue({ [property]: null  })
    this.mediaData[property] = null;
  }

}
