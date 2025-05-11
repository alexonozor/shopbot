import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { CreateMessagesComponent } from '../../messages/create-messages/create-messages.component';
import { RolesAndPermissionsService } from '../../../shared/services/roles-and-permissions.service';
import { RolesAndPermission } from '../../../shared/models/roles-and-permission';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-list-roles-and-permissions',
  templateUrl: './list-roles-and-permissions.component.html',
  styleUrls: ['./list-roles-and-permissions.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    RouterModule,
    MatMenuModule,
    MatPaginatorModule
  ]
})
export class ListRolesAndPermissionsComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'roleName', 'permissions', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<RolesAndPermission>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;

  constructor(
    private route: ActivatedRoute,
    private rolesService: RolesAndPermissionsService,
    private _matDialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<RolesAndPermission>(this.route.snapshot.data['permissions']) 
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
    this.confirmDialogRef.componentInstance.title = 'Delete permissions?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these permissions?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((permission: RolesAndPermission, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<RolesAndPermission>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.rolesService.getPermission(permission._id).subscribe();
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


  deletePermission(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Role?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this role?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<RolesAndPermission>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.rolesService.deletePermission(id).subscribe();
      }
    });
   
  }


  openMessaging() {
    this._matDialog.open(CreateMessagesComponent, {
      data: { roles: this.selection.selected, isBulkMsg: true, allRoles: true},
      width: '500px'
    });
  }




  message(role: Notification) {}

}
