import { Component, OnInit, Inject } from '@angular/core';
import {  Observable, finalize } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Store } from 'src/app/shared/models/store';
import { Menu } from 'src/app/shared/models/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Option } from 'src/app/shared/models/option';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { StoreOptionNewComponent } from '../store-options-new/store-options-new.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-store-options-select',
  templateUrl: './store-options-select.component.html',
  styleUrls: ['./store-options-select.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatInputModule
  ],
  providers: [
    ProductService
  ]
})

export class StoreOptionSelectComponent implements OnInit {
  public groupOptions$: Observable<Option[]> | undefined;
  private confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;
  public store!: Store;
  public menus: Menu[] = [];
  protected options: Option[] = []
  protected isLoading: boolean = false;
  protected isSubmitting: boolean = false;
  
  constructor(
    private productService: ProductsService,
    public _matDialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute,
    private _location: Location,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {pageType: string, selectedOptions: Option[], storeId: string}
  ) {
  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.groupOptions$ = this.productService.getStoreGroupOptionItems(this.data.storeId).pipe(finalize(() => 
      this.isLoading = false
    ))
  }


  protected updateEnabled(args: any, id:string): void {
    this.productService.updateStoreGroupOption({ enabled: args.checked }, id).subscribe();
  }

  protected saveGroupOptions() {
    this.dialogRef.close(this.options);
  }

  protected onSelection(e:MatSelectionListChange) {
    this.options = e.source._value as any;
  }

  isSelected(option: Option): boolean {
    return this.data.selectedOptions.some((item:any) => item._id === option._id);
  }


  addGroupOption() {
    let addStoreForm = this._matDialog.open(StoreOptionNewComponent, {
      disableClose: false,
      data: {storeId: this.data.storeId, pageType: 'new'}
    });
    addStoreForm.afterClosed().subscribe(result => {
       if (result) {
        this.loadProducts();
       }
    });
  }



goBack() {
  this._location.back()
}






}

