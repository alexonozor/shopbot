import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/shared/models/transaction';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from 'src/app/shared/services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payouts-list',
  templateUrl: './payouts-list.component.html',
  styleUrls: ['./payouts-list.component.scss']
})


export class PayoutsListComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'createdAt', 'vendor', 'orders', 'total',  'actions'];
  public dataSource = new MatTableDataSource<Transaction>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;


  constructor(
    private route: ActivatedRoute,
    private transactionsService: TransactionsService,
    private _matDialog: MatDialog,
    private router: Router
  ) { }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Transaction>(this.route.snapshot.data['transactions']) 
  }

  openModal(id:string) {
    this.router.navigate(['dashboard', 'reports', 'payouts', id, 'details']);
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
    this.confirmDialogRef.componentInstance.title = 'Delete Fund Request?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these Fund Request?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((fundRequest: Transaction, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Transaction>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.transactionsService.deleteTransaction(fundRequest._id).subscribe();
        })
      }
    });
    
  }

  // updateStatus(status:string) {
  //   this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
  //     disableClose: false
  //   });
  //   this.confirmDialogRef.componentInstance.title = `${status} Fund Request?`;
  //   this.confirmDialogRef.componentInstance.confirmMessage = `Are you sure you want to ${status} these Fund Request?`;
  //   this.confirmDialogRef.componentInstance.confirmButton = `${status}`;
  //   this.confirmDialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.selection.selected.forEach((fundRequest: Transaction, i:number) => {
  //       // this.dataSource.data.splice(i, 1);
  //       fundRequest.status = status;
  //       this.dataSource = new MatTableDataSource<Transaction>(this.dataSource.data);
  //       this.dataSource._updateChangeSubscription();
  //       this.dataSource.paginator = this.paginator;
  //       this.transactionsService.updateStatusTransaction(fundRequest._id, {status, id: fundRequest.requestedBy._id}).subscribe({});
  //       })
  //     }
  //   });
    
  // }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  deleteTransaction(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Fund Requests?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Fund Requests?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Transaction>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.transactionsService.deleteTransaction(id).subscribe();
      }
    });
   
  }

  update(fundRequestId:string, event: MatSlideToggleChange) {
      this.transactionsService.updateTransaction(fundRequestId, {enabled: event.checked}).subscribe((data) => {})
  }
}