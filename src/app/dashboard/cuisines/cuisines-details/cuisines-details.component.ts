import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CuisinesService } from 'src/app/shared/services/cuisines.service';
import { MediaComponent } from '../../media/media.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Cuisine } from '../../../shared/models/cuisine';


@Component({
  selector: 'app-cuisines-details',
  templateUrl: './cuisines-details.component.html',
  styleUrls: ['./cuisines-details.component.scss']
})
export class CuisinesDetailsComponent implements OnInit {

  cuisine:Cuisine;
  cuisineForm!:FormGroup;
  mediaData:any;

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
    });

    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.cuisine.image
  }

  ngOnInit(): void {}

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
