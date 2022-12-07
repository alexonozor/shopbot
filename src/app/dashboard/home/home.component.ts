import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Socket } from 'ngx-socket-io';
import { map, Observable, startWith, switchMap, tap, finalize } from 'rxjs';
import { ConfirmComponent } from 'src/app/shared/components/comfirm/confirm.component';
import { StoreService } from '../stores/details/store.service';
import { OrdersService } from '../../shared/services/order.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { StoresService } from '../stores/stores.service';
import { Store } from 'src/app/shared/models/store';
import * as moment from 'moment';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['storeName', 'customer', 'date', 'amount', 'actions'];
  dataSource!: MatTableDataSource<any[]>;
  public orders$!: Observable<any[]>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort) sort!: MatSort;
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });
  stat$!: Observable<any>
  stores$!: Observable<Store[]>


  title = 'ng2-charts-demo';
   public isLoadingChart!: boolean
  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;
  
  statuses = [
    { id: 0, name: "Pending", color: "bg-blue-300"},
    { id: 1, name: "Approve", color: "bg-blue-400"},
    { id: 3, name: "Canceled", color: "bg-blue-400"},
    { id: 2, name: "Shipped", color: "bg-blue-400"},
    { id: 3, name: "Completed", color: "bg-green-400"},
  ]
  constructor(
    private socket: Socket,
    private storeService: StoresService,
    private ordersService: OrdersService,
    private dashboardService: DashboardService,
    public _matDialog: MatDialog,
    public authService: AuthService,
    public router: Router
    ) {
    // Create 100 users

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.getOrderMonthlyChart()
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
    this.getOrders();
    this.getOrder();
    this.getStat();
    this.getOrderMonthlyChart()
    this.getRecentStores()
  }


  openOrder(id:string) {
    this.router.navigate(['dashboard', 'orders', id, 'details'])
  }




  getOrderMonthlyChart() {
    this.isLoadingChart = true
    this.dashboardService.getOrderMonthlyChart()
    .pipe(finalize(() => this.isLoadingChart = false))
    .subscribe((data) => {
      const label = ["", 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']
 
      const sortedDate = data.sort((a, b) =>  label.indexOf(a.month) - label.indexOf(b.month))


      this.lineChartData = {
        labels: sortedDate.map((d:any) => d.month),
        datasets: [
         { 
            data: sortedDate.map((d:any) => d.total) ,
            label: 'Orders Sale',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
            
          }
        ]
        
      };
      
    })
  }




  getStat() {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm');
    const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD hh:mm');
   this.stat$ = this.range.valueChanges.pipe(
    startWith({startDate: startOfMonth, endDate: endOfMonth }),
    distinctUntilChanged(),
    switchMap((date:any) =>  {
     return this.dashboardService.getOrderStat(date)
    }))
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
        // this.storeService.deleteStoreOrders(order._id).subscribe()
      }
    });
  }

  getOrders() {
   this.ordersService.getOrders(
    {
     data: {$match: { category: 'New'}},
     control:[ {$limit: 6},  { $sort: { 'createdAt': -1 }}] 
    }).pipe(tap((orders) => {
      this.dataSource = new MatTableDataSource(orders);
    })).subscribe()
  }

  getRecentStores() {
    this.stores$ = this.storeService.getStores({data: { $match: {} }, control: [
      { $sort: { 'createdAt': -1 }},
      { $limit: 4}
    ]})
    
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
    this.ordersService.updateOrderStatus(order._id, order.user._id, event.value).subscribe((data:any) => {
      console.log(data)
    })
  }

}


