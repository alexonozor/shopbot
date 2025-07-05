import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import {CategoriesService } from '../../../shared/services/category.service';
import { CommonModule, Location } from '@angular/common';
import { MediaComponent } from '../../media/media.component';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    SelectMediaComponent,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ]
})
export class CreateCategoriesComponent implements OnInit {
  mediaData:any;
  categoryForm = this.fb.group({
    name: ['', Validators.required],
    status: ['', Validators.required],
    image: ['', Validators.required],
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
