import { Component, OnInit, Input } from '@angular/core';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { MenusService } from './menus.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddMenusComponent } from '../modals/add-menus/add-menus.component';
import { EditMenusComponent } from '../modals/edit-menus/edit-menus.component';
import { MaterialModule } from 'src/app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-store-menus-tab',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    MenusService
  ]
})

export class StoreMenusComponent implements OnInit {
  public menus$: Observable<Menu[]> | undefined;
  private confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  public store!: Store;
  public menus: Menu[] = [];
  
  constructor(
    private menusService: MenusService,
    public _matDialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    private _location: Location,
  ) {
    this.store = this.route.parent?.parent?.parent?.parent?.parent?.snapshot.data['store'] as Store
  }


  ngOnInit() {
    this.loadMenus();
  }

  loadMenus() {
    this.menus$ = this.menusService.getStoreMenus(this.store._id).pipe(map((menus) => this.menus = menus))
  }

  protected updateEnabled(args: any,  menu: Menu): void {
    this.menusService.updateMenu(menu._id, { activate: args.checked }).subscribe();
    setTimeout(() => {
      menu.activate = args.checked
    }, 100)
    
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
   this.router.navigate(['../', menuId, 'details' ])
  }


goBack() {
  this._location.back()
}


drop(event: CdkDragDrop<string[] | any>) {
  
  moveItemInArray(this.menus, event.previousIndex, event.currentIndex);
   this.menus.forEach((item, i) => {
     this.menusService.updateMenu(item._id, {position: i}).subscribe()
  })
  

  
}



}

