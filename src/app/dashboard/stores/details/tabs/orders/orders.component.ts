
import { map, tap } from 'rxjs/operators';
import {AfterViewInit, OnInit, Component, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Socket } from 'ngx-socket-io';
import { StoreService } from '../../store.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/comfirm/confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';



/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-orders-tab',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {
  @Input() store!: any;
  public orders$!: Observable<any[]>;
  displayedColumns: string[] = ['select', 'reference', 'storeName', 'customer', 'date',  'status', 'amount', 'paymentStatus', 'paymentType', 'actions'];
  dataSource: MatTableDataSource<any[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort) sort!: MatSort;
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  statuses = [
    { id: 0, name: "Pending", color: "bg-blue-300"},
    { id: 1, name: "Approve", color: "bg-blue-400"},
    { id: 3, name: "Canceled", color: "bg-blue-400"},
    { id: 2, name: "Shipped", color: "bg-blue-400"},
    { id: 3, name: "Completed", color: "bg-green-400"},
  ]

  constructor(
    private socket: Socket,
    private storeService: StoreService,
    public _matDialog: MatDialog,
    ) {
    // Create 100 users

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  compareFn(t1: any, t2: any): boolean { 
    return t1 && t2 ? t1.name === t2 : t1.name === t2;
    }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

   /** The label for the checkbox on the passed row */
   checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnInit(): void {
    this.getOrders()
    this.getOrder()
  }

  deleteOrder(index:any, order:any) {
    console.log(order._id)
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Item?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this order?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription();
        this.storeService.deleteStoreOrders(order._id).subscribe()
      }
    });
  }

  getOrders() {
   this.storeService.getStoreOrders(this.store._id).pipe(tap((orders) => {
      this.dataSource = new MatTableDataSource(orders);
    })).subscribe()
  }

 
  getOrder() {
    return this.socket.fromEvent('order').pipe(map((data:any) => data)).subscribe((order) => {
      if (order) {
        this.dataSource.data.unshift(order)
        this.dataSource._updateChangeSubscription();
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  changeValue(event:any, order:any) {
    //event.value
    this.storeService.updateOrderStatus(order._id, order.user._id, event.value).subscribe((data:any) => {
      console.log(data)
    })
  }
}


