import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { CuisinesService } from '../../../shared/services/cuisines.service';
import { Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-cuisine',
  templateUrl: './create-cuisines.component.html',
  styleUrls: ['./create-cuisines.component.scss']
})
export class CreateCuisinesComponent implements OnInit {
  mediaData:any;
  cuisineForm = this.fb.group({
    name: ['', Validators.required],
    status: ['', Validators.required],
    image: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private cuisineService: CuisinesService,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.mediaData = { image:null, icon:null };
  }

  ngOnInit(): void {}

  submit() {
    if (this.cuisineForm.valid) {
      this.cuisineService.createCuisine(this.cuisineForm.getRawValue()).subscribe((data) => {
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
