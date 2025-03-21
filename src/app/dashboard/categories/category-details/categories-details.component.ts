import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/shared/services/category.service';
import { MediaComponent } from '../../media/media.component';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Category } from '../../../shared/models/category';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss'],
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
