import { Component, OnInit, Input } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/models/product';
import { Option } from 'src/app/shared/models/option';
import { FormsModule } from '@angular/forms';
import { StoreGroupOptionNewComponent } from '../modals/store-group-options-new/store-group-options-new.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-store-group-options-list',
  templateUrl: './store-group-options-list.component.html',
  styleUrls: ['./store-group-options-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    ProductService
  ]
})

export class StoreGroupOptionListComponent implements OnInit {
  public groupOptions$: Observable<Option[]> | undefined;
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
    this.groupOptions$ = this.productService.getStoreGroupOption(this.store._id)
  }

  delete(index:number, id:any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Group Option?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Option?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteStoreGroup(id).subscribe(() => {
          this.loadProducts();
        })
      }
      this.confirmDialogRef = null;
    });
  }

  protected updateEnabled(args: any, id:string): void {
    this.productService.updateStoreGroupOption({ enabled: args.checked }, id).subscribe();
  }

  

  addGroupOption() {
    let addStoreForm = this._matDialog.open(StoreGroupOptionNewComponent, {
      disableClose: false,
      data: {storeId: this.store._id, pageType: 'new'}
    });
    addStoreForm.afterClosed().subscribe(result => {
       if (result) {
        this.loadProducts();
       }
    });
  }

 editGroupOption(option:Option) {
    let addStoreForm = this._matDialog.open(StoreGroupOptionNewComponent, {
      disableClose: false,
      data: {storeId: this.store._id, option }
    });
    addStoreForm.afterClosed().subscribe(result => {
      
       if (result) {
        this.loadProducts();
       }
    });
  }

  viewMenu(menuId:string) {
   this.router.navigate(['dashboard', 'stores', this.store._id, 'details', menuId, 'menu' ])
  }


goBack() {
  this._location.back()
}








}

