import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, startWith, switchMap } from 'rxjs';
import { UsersService } from '../../../shared/services/users.service';
import { User } from '../../../shared/models/user';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { CreateMessagesComponent } from '../../messages/create-messages/create-messages.component';
import { AuthService } from 'src/app/shared/services';
import { Role } from 'src/app/shared/models/role';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['select', 'Name', 'phoneNumber', 'email', 'device', 'country', 'wallet', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<User>([]);
  public filterForm: FormGroup
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  Role = Role
  userObject: any
  resultsLength: number = 0;
  deliveries: DeliveryZone[] = []


  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    public auth: AuthService,
    private _matDialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      country: new FormControl('Nigeria'),
      search: new FormControl(null),
    });
    this.deliveries = this.route.snapshot.data['deliveries'] as DeliveryZone[];
    this.resultsLength = this.route.snapshot.data['count'] as number;
  }

  ngAfterViewInit() {
    combineLatest([
      this.filterForm.valueChanges.pipe(startWith({ country: 'Nigeria' })),
      this.paginator.page.pipe(startWith({ pageIndex: 0, pageSize: 20 }))
    ]).pipe(
      switchMap(([filterFormValue, paginatorEvent]) => {
        const { country, search } = filterFormValue;
        const offSet = paginatorEvent.pageSize * paginatorEvent.pageIndex;
        if (search) {
          this.paginator.pageIndex = 0;
          this.resultsLength = 20
          return this.userService.getUsers({
            data: { $match: { country, name: { $regex: search, $options: 'i' }  } },
            control: [
              { $sort: { createdAt: -1 } }
              // { $skip: offSet },
              // { $limit: 20 }
            ]
          });
          
        } else {
          this.resultsLength = this.route.snapshot.data['count'] as number;
          return this.userService.getUsers({
            data: { $match: { country } },
            control: [
              { $sort: { createdAt: -1 } },
              { $skip: offSet },
              { $limit: 20 }
            ]
          });
        }
        
      })
    ).subscribe((users) => {
      this.dataSource = new MatTableDataSource<User>(users);
      
      // this.paginator.pageIndex = 0;
    });
  }



  ngOnInit(): void {
    this.userObject = this.route.snapshot.data['customers'];
    // this.resultsLength = this.userObject.length;
    this.dataSource = new MatTableDataSource<User>(this.userObject);
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
    this.confirmDialogRef.componentInstance.title = 'Delete customers?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these customers?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((user: User, i: number) => {
          this.dataSource.data.splice(i, 1);
          this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
          this.dataSource._updateChangeSubscription();
          this.dataSource.paginator = this.paginator;
          this.userService.deleteUser(user._id).subscribe();
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
        this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.userService.deleteUser(id).subscribe();
      }
    });

  }


  message(customer: User) {
    this._matDialog.open(CreateMessagesComponent, {
      data: { customers: customer, isBulkMsg: false, allCustomers: false },
      width: '500px'
    });

  }

  sendMessagesToSelectedCustomers() {
    this._matDialog.open(CreateMessagesComponent, {
      data: { customers: this.selection.selected, isBulkMsg: true, allCustomers: false },
      width: '500px'
    });
  }

}
