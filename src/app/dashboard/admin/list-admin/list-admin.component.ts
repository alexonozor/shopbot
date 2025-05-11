import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Admin } from 'src/app/shared/models/admin';
import { AdminService } from '../../../shared/services/admin.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule
  ]
})
export class ListAdminComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'Name', 'phoneNumber', 'email', 'phoneNumber', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<Admin>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;


  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private _matDialog: MatDialog
  ) { }

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Admin>(this.route.snapshot.data['admins']) 
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
    this.confirmDialogRef.componentInstance.title = 'Delete administrators?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these administrators?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((Admin: Admin, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Admin>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.adminService.deleteAdmin(Admin._id).subscribe();
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


  deleteAdmin(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Administrator?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this administrator?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Admin>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.adminService.deleteAdmin(id).subscribe();
      }
    });
   
  }


  message(administrator: Admin) {

  }

}
