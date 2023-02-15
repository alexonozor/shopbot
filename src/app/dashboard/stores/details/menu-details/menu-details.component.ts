import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Store } from 'src/app/shared/models/store';
import { StoreService } from '../store.service';
import { Location } from '@angular/common';
import { Menu } from 'src/app/shared/models/menu';
import { MenuService } from './menu.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { AddMenusComponent } from '../tabs/menus/modals/add-menus/add-menus.component';
import { AddItemToMenuComponent } from './modal/add-item-to-menu/add-item-to-menu.component';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  store!: Store;
  menu!: Menu
  storeId!: string;
  foods!: Product[];
  public selectedTab = 0;
  private _unsubscribeAll: Subject<any>;
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;


  constructor(
    public _matDialog: MatDialog,
    private storeService: StoreService,
    private menuService: MenuService,
    private _location: Location
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.store = this.storeService.store;
    this.menu = this.menuService.menu;
    this.foods = this.menuService.menu.foods;
  }

  goBack() {
    this._location.back();
  }

 

  addTimeToMenu() {
    let addToComponent = this._matDialog.open(AddItemToMenuComponent, {
      disableClose: false,
      data: { storeId: this.store._id, menuId: this.menu._id, food: this.foods, pageType: 'new' }
    });
    addToComponent.afterClosed().subscribe(result => {

      if (result) {
        this.menuService.onMenuChanged.next(result);
        this.menuService.getMenu().then((menu) => {
          this.menu = menu;
          this.foods = menu.foods;
        })
      }
    });
  }

  removeFood(food:Product, index:number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Item?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this item from menu?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.foods.splice(index, 1);
        this.menuService.removeFoodToMenu(food._id, this.menu._id).subscribe((data) => {})
      }
    });
  }

  // @Post('/add-item-to-popular')
  // addToPopular(@Req() req: Request, @Res() res: Response) {
  //   this.storeService.addToPopular(req.body).then((Store) => {
  //     return res.json(Store);
  //   }).catch(err => console.log(err))
  // }

  // @Post('/remove-item-from-popular')
  isAdded(foodId:any) {
    return this.store?.popular.includes(foodId)
   }
  togglePopular(storeId:string, foodId:string) {
    if (this.isAdded(foodId)) {
      this.storeService.removeItemFromPopular({store: storeId, item: foodId}).subscribe(() => {
        this.isAdded(foodId)
      })
    } else {
      this.storeService.addItemToPopular({store: storeId, item: foodId}).subscribe(() => {
        this.isAdded(foodId)
      })
    }
  }



  edit(product: Product) {
    let addToComponent = this._matDialog.open(AddItemToMenuComponent, {
      disableClose: false,
      data: { storeId: this.store._id, menuId: this.menu._id, food: this.foods, product, pageType: 'edit' }
    });
    addToComponent.afterClosed().subscribe(result => {
      if (result) {
        this.menuService.onMenuChanged.next(result);
        this.menuService.getMenu().then((menu) => {
           
          this.menu = menu;
          
          this.foods = menu.foods;
        })
      }
    });
  }
  ngOnDestroy(): void { }


}
