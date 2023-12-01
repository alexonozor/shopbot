import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersResolver } from 'src/app/shared/resolvers/customers.resolver';
import { User } from '../../../shared/models/user';
import { Location } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { UsersService } from 'src/app/shared/services/users.service';
import { OrdersService } from '../../../shared/services/order.service';
import { Observable, finalize, map } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { EditCustomersInfoComponent } from '../modals/edit-customers-info/edit-customers-info.component';
import { EditCustomersNotesComponent } from '../modals/edit-customers-notes/edit-customers-notes.component';
import { EditCustomersMarketingStatusComponent } from '../modals/edit-customers-marketing-status/edit-customers-marketing-status.component';
import { EditWalletComponent } from '../modals/edit-wallet/edit-wallet.component';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss']
})
export class CustomersDetailsComponent implements OnInit, AfterViewInit {
  public customer!: User;
  public displayedColumns: string[] = ['select', 'reference', 'category', 'store', 'amount',  'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<Order>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  orders$!: Observable<Order[]> 
  transactions$!: Observable<any[]> 
  userReferralStat!: Observable<any[]> 
  userReferrals$!: Observable<any[]> 
  userReferralStat$!: Observable<any> 
  userAddresses$!: Observable<any[]> 

  constructor( 
    private route: ActivatedRoute,
    private userService: UsersService,
    private orderService: OrdersService,
    private router: Router,
    private location: Location,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.customer = this.route.snapshot.data['customer'] as User;
    this.getCustomerOrders(this.customer._id)
    this.getUsersTransaction()
    this.getUserReferrals()
    this.getUserReferralsStat(),
    this.getUserAddresses()
  }

  getCustomerOrders(id:string) {
    this.orders$ = this.orderService.getUserOrders(id)
    .pipe(
      // finalize(() => this.dataSource.paginator = this.paginator),
      map((orders) => {
        this.dataSource = new MatTableDataSource<Order>(orders)
        this.dataSource.paginator = this.paginator
        return orders
      })
    )
  }

  getUsersTransaction() {
    this.transactions$ = this.userService.getUserTransactions(this.customer._id)
  }

  getUserReferrals() {
    this.userReferrals$ = this.userService.getUserReferrals(this.customer._id)
  }

  getUserReferralsStat() {
    this.userReferralStat$ = this.userService.getUserReferralStats(this.customer._id)
  }

  getUserAddresses() {
    this.userAddresses$ = this.userService.getUserAddresses(this.customer._id)
  }

  back() {
    this.location.back()
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
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


  deleteUser(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Customer?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this customer?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.userService.deleteUser(id).subscribe();
      }
    });
   
  }

  deleteOrder(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Order?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this order?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.orderService.deleteOrder(id).subscribe();
      }
    });
   
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
        this.selection.selected.forEach((user: Order, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Order>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.userService.deleteUser(user._id).subscribe();
        })
      }
    });
    
  }

  openCustomerBasicInfo() {
    const dialogRef = this._matDialog.open(EditCustomersInfoComponent, {
      data: this.customer,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = {...this.customer, ...result}
      }
    });
  }

  editWallet() {
    const dialogRef = this._matDialog.open(EditWalletComponent, {
      data: this.customer,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = {...this.customer, ...result}
      }
    });
  }

  openCustomerNote() {
    const dialogRef = this._matDialog.open(EditCustomersNotesComponent, {
      data: this.customer,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = {...this.customer, ...result}
      }
    });
  }

  openCustomerMarketingStatus() {
    const dialogRef = this._matDialog.open(EditCustomersMarketingStatusComponent, {
      data: this.customer,
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customer = {...this.customer, ...result}
      }
    });
  }

  disableAccount(event:any) {
    this.customer = {...this.customer, ...{ deleteAccount: event.checked}}
    this.userService.updateUser(this.customer._id, {deleteAccount: this.customer.deleteAccount}).subscribe()
  }

  banAccount(event:any) {
    console.log(event)
      this.customer = {...this.customer, ...{ ban: event.checked}}
      this.userService.updateUser(this.customer._id, {ban: this.customer.ban}).subscribe()
  }

  allowCash(event:any) {
    console.log(event)
      this.customer = {...this.customer, ...{ allowCashOnDelivery: event.checked}}
      this.userService.updateUser(this.customer._id, {allowCashOnDelivery: this.customer.allowCashOnDelivery}).subscribe()
  }

  allowWallet(event:any) {
    console.log(event)
      this.customer = {...this.customer, ...{ allowWallet: event.checked}}
      this.userService.updateUser(this.customer._id, {allowWallet: this.customer.allowWallet}).subscribe()
  }


  deleteAccount() {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete customers?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these customers?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(this.customer._id).subscribe(() => {
          this.location.back()
        });
      }
    });
    
  }

  

  message(customer: User) {}


}
