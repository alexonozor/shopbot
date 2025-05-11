import { Component, OnInit, AfterViewInit, inject, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { ProductService } from 'src/app/shared/services/product.service';
import { CommonModule, Location } from '@angular/common';
import { MenuService } from 'src/app/shared/services/menu.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { Option } from 'src/app/shared/models/option';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/services/products.service';
import { MenusService } from '../../../categories/list/menus.service';
import { StoreOptionSelectComponent } from '../../../store-options-items/modals/store-options-select/store-options-select.component';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: "store-group-options-new",
  templateUrl: "./store-group-options-new.component.html",
  styleUrls: ["./store-group-options-new.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
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
export class StoreGroupOptionNewComponent implements OnInit {
  pageType!: string;
  groupOptionsForm!: FormGroup;
  productId!: string;
  isLoading: boolean = false;
  protected categories: Menu[] = [];
  protected options: Option[] = []
  protected storeId!: string;
  protected settingService = inject(SettingsService)
  protected option!: Option;
  
  constructor(
    private productsService: ProductsService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private menusService: MenuService,
    private route: ActivatedRoute,
    public _matDialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {pageType: string, option: Option,  storeId: string}
  ) {
    this.pageType = this.data.pageType;
    this.storeId = this.data.storeId; 
  }

  ngOnInit(): void {
    if (this.pageType == 'new') {
     this.groupOptionsForm = this.newOptionsGroup()
    } else {
      this.option = this.data.option;
      this.options = this.data.option.options;
      console.log(this.options)
      this.groupOptionsForm =  this.newOptionsGroup(this.option)
    }
   
  }

  


  newOptionsGroup(option?:Option): FormGroup {
    return this._formBuilder.group({
      _id: [!!option ? option._id : ""],
      name: [!!option ? option.name : "", [Validators.required, Validators.minLength(2)]],
      enabled: [option && option.enabled ? true : false, Validators.required],
      atLeast: [!!option ? option.atLeast : 0, Validators.required],
      atMost: [!!option ? option.atMost : 0, Validators.required],
      store: [this.storeId],
    });
  }


  addOptionItems() {
    let addStoreForm = this._matDialog.open(StoreOptionSelectComponent, {
      disableClose: false,
      data: {storeId: this.data.storeId, selectedOptions: this.options}
    });
    addStoreForm.afterClosed().subscribe(results => {
       if (results) {
         this.options = results 
       }
    });
  }


  saveGroupOptions(): void {
   const data = this.groupOptionsForm.getRawValue();
   data['options'] = this.options
    this.isLoading = true
    if (this.groupOptionsForm.invalid) {
      alert('Some fields are required.')
      return;
    }
    if (this.pageType !== 'new') {
      this.productsService.updateStoreGroupOption(data, this.groupOptionsForm.getRawValue()._id)
      .subscribe((data: any) => {
        this.dialogRef.close(this.groupOptionsForm.getRawValue());
        this.isLoading = false
      })
    } else {
      delete this.groupOptionsForm.getRawValue()._id
      this.productsService.saveStoreGroupOption(data).subscribe((data: any) => {
        this.dialogRef.close(this.groupOptionsForm.getRawValue());
        this.isLoading = false
      })
    }
  }

  protected onSelection(e:MatSelectionListChange) {
    this.options = e.source._value as any;
  }

  isSelected(option: Option): boolean {
    return this.options.some((item:any) => item._id === option._id);
  }

  removeOption(index:number, id:string) {
    this.options.splice(index, 1)
  }

 

}

