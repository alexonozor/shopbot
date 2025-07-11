import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Notification } from 'src/app/shared/models/notification';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { CreateMessagesComponent } from '../create-messages/create-messages.component';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    RouterModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class ListMessagesComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['select', 'recipients', 'type', 'title', 'body', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<Notification>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  deliveries: DeliveryZone[]

  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationsService,
    private _matDialog: MatDialog
  ) {
    this.deliveries = this.route.snapshot.data['deliveries'] as DeliveryZone[];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Notification>(this.route.snapshot.data['notifications']) 
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
    this.confirmDialogRef.componentInstance.title = 'Delete notifications?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these notifications?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((notification: Notification, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Notification>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.notificationService.deleteNotification(notification._id).subscribe();
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

  deleteNotification(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Customer?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this customer?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Notification>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.notificationService.deleteNotification(id).subscribe();
      }
    });
  }

  openMessaging() {
    this._matDialog.open(CreateMessagesComponent, {
      data: { customers: this.selection.selected, isBulkMsg: true, allCustomers: true, deliveries: this.deliveries},
      width: '500px'
    });
  }




  message(customer: Notification) {

  }

}
