import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BannersService } from 'src/app/shared/services/banners.service';
import { MediaComponent } from '../../media/media.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Banner } from '../../../shared/models/banner';


@Component({
  selector: 'app-edit-banners',
  templateUrl: './edit-banners.component.html',
  styleUrls: ['./edit-banners.component.scss']
})
export class EditBannersComponent implements OnInit {

  banner:Banner;
  bannerForm!:FormGroup;
  mediaData:any;

  constructor(
    private fb: FormBuilder,
    private bannerService: BannersService,
    private location: Location,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
   this.banner = this.route.snapshot.data['banner'] as Banner;
   this.mediaData = { image:null, icon:null };
   this.bannerForm = this.fb.group({
    image: [this.banner.image, Validators.required],
    title: [this.banner.title, Validators.required],
    active: [this.banner.active, Validators.required],
    category: [this.banner.category, Validators.required],
    link: [this.banner.link, Validators.required],
    showOnSlider: [this.banner.showOnSlider, Validators.required],
    shortDescription: [this.banner.shortDescription, Validators.required]
  });
    this.mediaData = {image:null, icon:null};
    this.mediaData['image'] = this.banner.image
  }

  ngOnInit(): void {}

  submit() {
    if (this.bannerForm.valid) {
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
