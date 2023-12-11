import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { MediaComponent } from '../../media/media.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../shared/models/category';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';


@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  category:Category;
  categoryForm!:FormGroup;
  mediaData:any;
  selectedZone!: DeliveryZone;
  deliveryZones: any;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoriesService,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
   this.category = this.route.snapshot.data['category'] as Category;
   this.deliveryZones = this.route.snapshot.data['deliveryZones'] as DeliveryZone[]
   this.mediaData = { image:null, icon:null };
   this.categoryForm = this.fb.group({
      name: [this.category.name, Validators.required],
      status: [this.category.status, Validators.required],
      image: [this.category.image, Validators.required],
      // country: [this.category.country, Validators.required],
      // states: [this.category.states, Validators.required],
      countries: [this.category.countries, Validators.required],
    });
    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.category.image
  }

  selectedCountry(event:any) {
    this.selectedZone =  this.deliveryZones.find((zone:any) => zone.country == event.value) as DeliveryZone
   }

  ngOnInit(): void {}

  submit() {
    if (this.categoryForm.valid) {
      this.categoryService.updateCategory(this.category._id, this.categoryForm.getRawValue()).subscribe((data:any) => {
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
