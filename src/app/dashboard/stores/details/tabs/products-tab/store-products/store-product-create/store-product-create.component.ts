import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, forkJoin, mergeMap, Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { CommonModule, Location } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { MenuService } from 'src/app/shared/services/menu.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material';
import { Menu } from 'src/app/shared/models/menu';
import { MenusService } from '../../categories/list/menus.service';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { StoreGroupOptionSelectComponent } from '../../store-group-options/modals/store-group-options-select/store-group-options-select.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-store-product-create',
  templateUrl: './store-product-create.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService,
    MenuService,
    MenusService
  ],
  styleUrls: ['./store-product-create.component.scss']
})
export class StoreProductCreateComponent implements OnInit {
  private _unsubscribeAll!: Subject<any>;
  fileName!: string;
  uploadProgress!: any;
  uploadSub!: Subscription | null;
  product!: Product;
  pageType!: string;
  productForm!: FormGroup;
  productId!: string;
  isLoading: boolean = false;
  protected categories: Menu[] = [];
  protected settingService = inject(SettingsService)
  protected isSaved = false

  constructor(
    private productService: ProductService,
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _matSnackBar: MatSnackBar,
    private menusService: MenuService,
    private route: ActivatedRoute,
    private _matDialog: MatDialog,
    private productsService: ProductsService,
  ) {
    
    const queryParams = this.route.snapshot.queryParams
    this.pageType = queryParams['pageType'];
    
    if (this.pageType == 'new') {
      this.isSaved = false
      this.product = new Product();
      this.product.store = this.settingService.getParametersFromUrl(this.route.snapshot, 'id');
    } else {
      this.isSaved = true
      const product =  this.settingService.findDataInRoute(this.route.snapshot, 'product');
      this.product = new Product(product);
      this.product.store = this.product.store || this.settingService.getParametersFromUrl(this.route.snapshot, 'id')
    }
    
  }

  ngOnInit(): void {
    this.categories = this.settingService.findDataInRoute(this.route.snapshot, 'storeCategories') as Menu[]
    this.productForm = this.createProductForm();
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      _id: [this.product._id],
      name: [this.product.name, Validators.required],
      menu: [this.product.menu, Validators.required],
      store: [this.product.store, Validators.required],
      description: [this.product.description, Validators.required],
      photos: [this.product.photos],
      quantity: [this.product.quantity],
      price: [this.product.price, Validators.required],
      active: [this.product.active],
  
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files;
    for (var i = 0; i < event.target.files.length; i++) {
      if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("files", event.target.files[i]);

        const upload$ = this.productService.uploadPhoto(formData, this.product._id)
          .pipe(
            finalize(() => this.reset())
          );

        this.uploadSub = upload$.subscribe(event => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          } else if (event.hasOwnProperty('body')) {
            this.product.photos.push(event.body.photos[0])
          }
        })
      }
    }
  }

  addOptions() {
    let addStoreForm = this._matDialog.open(StoreGroupOptionSelectComponent, {
      disableClose: false,
      data: {storeId: this.product.store, selectedOptions: this.product.options},
      width: '400px'
    });
    addStoreForm.afterClosed().subscribe((results) => {
      
       if (results.length > 0) {
        this.product.options = results
        // this.loadProducts();
       }
    });
  }

  updateOptions(options: any[], productId: string) {
    const calls = options.map(({ _id }) => this.productsService.addProductIdToOptionGroup(_id, { productId }))
    forkJoin(calls).subscribe((data) => { })
  }

  saveProduct(): void {
    if(this.productForm.invalid) {
      return;
    }
    this.isLoading = true;
    const data = this.productForm.getRawValue();
    data['options'] = this.product.options
    if (this.pageType == 'new') {
    this.productService.addProduct(data).pipe(
      mergeMap((val) => {
        this.product._id = val._id
        this.updateOptions(this.product.options,  this.product._id)
       return this.menusService.addFoodToMenu(val._id, this.product.menu)
      })
    ).subscribe((data) => {
      this.isLoading = false;
      this.isSaved = true
        this._matSnackBar.open('Product saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        
      });
    } else {
    
    this.productService.saveProduct(data, this.product._id).subscribe((data) => {
      this.isLoading = false;
        // this.dialogRef.close('data')
        this.updateOptions(this.product.options,  this.product._id)
        this._matSnackBar.open('Product saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        
      });
    }
  }

  deleteImages(index:number) {
    this.product.photos.splice(index, 1)
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }


  removeOption(index: number, optionId: string) {
    this.product.options.splice(index, 1);
    this.productsService.removeProductIdToOptionGroup(optionId, this.product._id).subscribe((data) => {
      console.log(data);
    })
  }
}
