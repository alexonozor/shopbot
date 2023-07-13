import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {BannersService } from '../../../shared/services/banners.service';
import { Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-banners',
  templateUrl: './create-banners.component.html',
  styleUrls: ['./create-banners.component.scss']
})
export class CreateBannersComponent implements OnInit {
  mediaData:any;
  bannerForm:FormGroup;

  constructor(
    private fb: FormBuilder,
    private bannerService:BannersService,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.mediaData = { image:null, icon:null };
    this.bannerForm = this.fb.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      active: [false, Validators.required],
      category: ['', Validators.required],
      link: ['', Validators.required],
      shortDescription: ['', Validators.required],
      showOnSlider: [false, Validators.required],
      country: ['', Validators.required],
      cities: ['', Validators.required]
    });
  }

  

  ngOnInit(): void {}

  submit() {
    if (this.bannerForm.valid) {
      this.bannerService.createBanner(this.bannerForm.getRawValue()).subscribe((data) => {
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