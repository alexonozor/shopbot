import { Component, OnInit, Input } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-store-products-list',
  templateUrl: './store-products-list.component.html',
  styleUrls: ['./store-products-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    ProductService
  ]
})

export class StoreProductsListComponent implements OnInit {
  public products$: Observable<Product[]> | undefined;
  private confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  public store!: Store;
  public menus: Menu[] = [];
  
  constructor(
    private productService: ProductsService,
    public _matDialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    private _location: Location,
  ) {
    this.store = this.route.parent?.parent?.parent?.parent?.parent?.snapshot.data['store'] as Store
  }


  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.products$ = this.productService.getStoreProducts(this.store._id)
  }

  delete(index:number, id:string) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Product?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this product?';
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

  addMenu() {
    // let addStoreForm = this._matDialog.open(AddMenusComponent, {
    //   disableClose: false,
    //   data: {storeId: this.store._id}
    // });
    // addStoreForm.afterClosed().subscribe(result => {
      
    //    if (result) {
    //     this.loadProducts();
    //    }
    // });
  }

  openEdit(menu:Menu) {
    // let addStoreForm = this._matDialog.open(EditMenusComponent, {
    //   disableClose: false,
    //   data: {storeId: this.store._id, menu}
    // });
    // addStoreForm.afterClosed().subscribe(result => {
      
    //    if (result) {
    //     this.loadProducts();
    //    }
    // });
  }

  viewMenu(menuId:string) {
   this.router.navigate(['dashboard', 'stores', this.store._id, 'details', menuId, 'menu' ])
  }


goBack() {
  this._location.back()
}






}

