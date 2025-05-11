import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from '../../../shared/services/category.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ListCategoriesComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'name', 'status', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<Category>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;


  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private _matDialog: MatDialog
  ) { }

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Category>(this.route.snapshot.data['categories']) 
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  deleteSelected() {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete categories?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these categories?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((Categories: Category, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Category>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.categoriesService.deleteCategory(Categories._id).subscribe();
        })
      }
    });
    
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  deleteCategories(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Categories?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this categories?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Category>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.categoriesService.deleteCategory(id).subscribe();
      }
    });
   
  }


}
