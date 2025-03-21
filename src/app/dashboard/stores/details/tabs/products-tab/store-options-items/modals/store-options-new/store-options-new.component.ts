import { Component, OnInit, AfterViewInit, inject, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/shared/services/product.service';
import { CommonModule, Location } from '@angular/common';
import { MenuService } from 'src/app/shared/services/menu.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { Menu } from 'src/app/shared/models/menu';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { Option } from 'src/app/shared/models/option';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/services/products.service';
import { MenusService } from '../../../categories/list/menus.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: "store-group-options-new",
  templateUrl: "./store-options-new.component.html",
  styleUrls: ["./store-options-new.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    ProductService,
    MenuService,
    MenusService
  ]
})
export class StoreOptionNewComponent implements OnInit {
  pageType!: string;
  groupOptionsForm!: FormGroup;
  productId!: string;
  isLoading: boolean = false;
  protected categories: Menu[] = [];
  protected storeId!: string;
  protected settingService = inject(SettingsService)
  protected option!: Option;
  constructor(
    private productsService: ProductsService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private menusService: MenuService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {pageType: string, option: Option, storeId: string}
  ) {
    this.pageType = this.data.pageType;
    this.storeId = this.data.storeId; 
  }

  ngOnInit(): void {
    if (this.pageType == 'new') {
     this.groupOptionsForm = this.newOptionsGroup()
      // this.menu = this.settingService.getParametersFromUrl('categoryId');
      // this.store = this.settingService.getParametersFromUrl('id');
    } else {
      this.option = this.data.option;
      this.groupOptionsForm =  this.newOptionsGroup(this.option)
    }
   
  }


  newOptionsGroup(option?:Option): FormGroup {
    return this._formBuilder.group({
      _id: [!!option ? option._id : null],
      name: [!!option ? option.name : null, [Validators.required, Validators.minLength(2)]],
      inStock: [!!option && option.inStock ? true : false, Validators.required],
      price: [!!option ? option.price : null, Validators.required],
      optionGroup: [!!option ? option.optionGroup : null],
      store: [this.storeId]
    });
  }


  get options(): FormArray | any {
    return this.groupOptionsForm.get("options") as FormArray
  }

  saveGroupOptions(): void {
    this.isLoading = true
    if (this.groupOptionsForm.invalid) {
      alert('Some fields are required.')
      return;
    }
    if (this.pageType !== 'new') {
      this.productsService.updateStoreGroupOptionItem(this.groupOptionsForm.getRawValue(), this.groupOptionsForm.getRawValue()._id)
      .subscribe((data: any) => {
        this.dialogRef.close(this.groupOptionsForm.getRawValue());
        this.isLoading = false
      })
    } else {
      delete this.groupOptionsForm.getRawValue()._id
      this.productsService.saveStoreGroupOptionItem(this.groupOptionsForm.getRawValue()).subscribe((data: any) => {
        this.dialogRef.close(this.groupOptionsForm.getRawValue());
        this.isLoading = false
      })
    }
  }

  deleteImages(index:number) {
    // this.product.photos.splice(index, 1)
  }

 

}

