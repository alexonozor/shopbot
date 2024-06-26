import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Menu } from 'src/app/shared/models/menu';
import { Product } from 'src/app/shared/models/product';
import { Store } from 'src/app/shared/models/store';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-store-category-products',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  templateUrl: './store-category-products.component.html',
  styleUrl: './store-category-products.component.scss',
})
export class StoreCategoryProductsComponent implements OnInit {

  public products$: Observable<Product[]> | undefined;
  private confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  public store!: Store;
  public menus: Menu[] = [];
  public categoryId!: string
  
  constructor(
    private productService: ProductsService,
    public _matDialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    private settingService: SettingsService
  ) {
    this.store = this.settingService.findDataInRoute(this.route.snapshot, 'store') as Store;
    this.categoryId = this.route.parent?.snapshot.params['categoryId'];
  }


  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.productService.getCategoryProducts(this.categoryId)
  }

  delete(index:number, id:any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Menu?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this menu?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(index, id).subscribe(() => {
          this.loadProducts();
        })
      }
      this.confirmDialogRef = null;
    });
  }

  removeFromCategory(product: Product) {
    this.productService.updateProduct(product._id, {menu: null}).subscribe()
  }


  viewMenu(menuId:string) {
   this.router.navigate(['dashboard', 'stores', this.store._id, 'details', menuId, 'menu' ])
  }


goBack() {
  // this._location.back()
}

}
