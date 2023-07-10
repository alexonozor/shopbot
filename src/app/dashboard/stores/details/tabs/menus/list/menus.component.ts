import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { MenusService } from './menus.service';
import { AddMenusComponent } from '../modals/add-menus/add-menus.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EditMenusComponent } from '../modals/edit-menus/edit-menus.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-store-menus-tab',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
})


export class StoreMenusComponent implements OnInit {
  public menus$: Observable<Menu[]> | undefined;
  private confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  @Input() store: Store | any;
  public menus: Menu[] = [];


  constructor(
    private menusService: MenusService,
    public _matDialog: MatDialog,
    public router: Router,
    private _location: Location,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
     this.loadMenus();
  }

  loadMenus() {
    this.menus$ = this.menusService.getStoreMenus(this.store._id).pipe(map((menus) => this.menus = menus))
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
        this.menusService.deleteMenu(index, id).subscribe(() => {
          this.loadMenus();
        })
      }
      this.confirmDialogRef = null;
    });
  }

  addMenu() {
    let addStoreForm = this._matDialog.open(AddMenusComponent, {
      disableClose: false,
      data: {storeId: this.store._id}
    });
    addStoreForm.afterClosed().subscribe(result => {
      
       if (result) {
        this.loadMenus();
       }
    });
  }

  openEdit(menu:Menu) {
    let addStoreForm = this._matDialog.open(EditMenusComponent, {
      disableClose: false,
      data: {storeId: this.store._id, menu}
    });
    addStoreForm.afterClosed().subscribe(result => {
      
       if (result) {
        this.loadMenus();
       }
    });
  }

  viewMenu(menuId:string) {
   this.router.navigate(['dashboard', 'stores', this.store._id, 'details', menuId, 'menu' ])
  }


goBack() {
  this._location.back()
}


drop(event: CdkDragDrop<string[]>) {
  
  moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
   this.menus.forEach((item, i) => {
     this.menusService.updateMenu(item._id, {position: i}).subscribe()
  })
  

  
}



}

