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
import { StoreOptionNewComponent } from '../modals/store-options-new/store-options-new.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store-store-options-items-list',
  templateUrl: './store-options-items-list.component.html',
  styleUrls: ['./store-options-items-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    ProductService
  ]
})

export class StoreOptionsItemsListComponent implements OnInit {
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
    this.getOptionItems();
  }

  getOptionItems() {
    this.groupOptions$ = this.productService.getStoreGroupOptionItems(this.store._id)
  }

  addOption() {
    let addStoreForm = this._matDialog.open(StoreOptionNewComponent, {
      disableClose: false,
      data: {storeId: this.store._id, pageType: 'new'}
    });
    addStoreForm.afterClosed().subscribe(result => {
       if (result) {
        this.getOptionItems();
       }
    });
  }

 editOption(option:Option) {
    let addStoreForm = this._matDialog.open(StoreOptionNewComponent, {
      disableClose: false,
      data: {storeId: this.store._id, option }
    });
    addStoreForm.afterClosed().subscribe(result => {
      
       if (result) {
        this.getOptionItems();
       }
    });
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
        this.productService.deleteOptionItem(id).subscribe(() => {
          this.getOptionItems();
        })
      }
      this.confirmDialogRef = null;
    });
  }

  protected updateEnabled(args: any, id:string): void {
    this.productService.updateStoreGroupOptionItem({ inStock: args.checked }, id).subscribe();
  }


  viewMenu(menuId:string) {
   this.router.navigate(['dashboard', 'stores', this.store._id, 'details', menuId, 'menu' ])
  }


goBack() {
  this._location.back()
}






}

