import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from 'src/app/shared/services/order.service';
import { switchMap } from 'rxjs/operators';
import { Role } from 'src/app/shared/models/role';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'no', 'orderId', 'vendorName', 'customerName', 'type', 'date', 'status', 'paymentStatus', 'settled', 'paymentType', 'amount', 'actions'];
  public dataSource = new MatTableDataSource<Order>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  totalOrders: number = 0;
  Role = Role
  

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private _matDialog: MatDialog,
    public auth: AuthService,
  ) { }

  

  ngAfterViewInit() {
    
    this.paginator.page.pipe(switchMap((event) => { 
      const offSet = event.pageSize * event.pageIndex
      return this.orderService.getOrders({
      data: {$match:{}},
      control:[{$sort:{'createdAt': -1}},{$skip:offSet},{$limit:20}] 
     })
    })).subscribe((orders) => {
     
      this.dataSource = new MatTableDataSource<Order>(orders);
    })
   
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Order>(this.route.snapshot.data['orders']);
    this.totalOrders = this.route.snapshot.data['totalOrders'] as number;
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
    this.confirmDialogRef.componentInstance.title = 'Delete orders?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these orders?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((order: Order, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.orderService.deleteOrder(order._id).subscribe();
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


  deleteOrder(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Customer?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this order?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        // this.dataSource.paginator = this.paginator;
        this.orderService.deleteOrder(id).subscribe();
      }
    });
   
  }

}
