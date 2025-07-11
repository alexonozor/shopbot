
import { map, tap } from 'rxjs/operators';
import {AfterViewInit, OnInit, Component, ViewChild, Input, Inject} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Socket } from 'ngx-socket-io';
import { StoreService } from '../../store.service';
import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/shared/models/store';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

 @Component({
  selector: 'app-orders-tab',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [
    StoreService
  ]
})
export class OrdersComponent implements OnInit, AfterViewInit {
  
  protected store!: Store;
  public orders$!: Observable<any[]>;
  displayedColumns: string[] = ['reference', 'date',  'status', 'amount', 'paymentStatus', 'paymentType', 'actions'];
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
    @Inject(Socket) private socket: Socket,
    private storeService: StoreService,
    public _matDialog: MatDialog,
    public route: ActivatedRoute
    ) {
      this.store = this.route.parent?.parent?.snapshot.data['store'] as Store
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

  get getTotalCost() {
    return this.dataSource.data.map((t:any) => t.total).reduce((acc, value) => acc + value, 0);
  }
 
  getOrder() {
    // return this.socket.fromEvent('order').pipe(map((data:any) => data)).subscribe((order:any) => {
    //   if (order) {
    //     this.dataSource.data.unshift(order)
    //     this.dataSource._updateChangeSubscription();
    //   }
    // })
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


