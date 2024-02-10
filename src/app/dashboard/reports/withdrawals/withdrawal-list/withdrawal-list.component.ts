import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { Transfer } from 'src/app/shared/models/transfer';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { ActivatedRoute } from '@angular/router';
import { TransfersService } from 'src/app/shared/services/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawals-list',
  templateUrl: './withdrawal-list.component.html',
  styleUrls: ['./withdrawal-list.component.scss']
})


export class WithdrawalListComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'createdAt', 'vendor', 'destination', 'type', 'merchant', 'status', 'total',  'actions'];
  public dataSource = new MatTableDataSource<Transfer>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;


  constructor(
    private route: ActivatedRoute,
    private transfersService: TransfersService,
    private _matDialog: MatDialog,
    private router: Router
  ) { }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Transfer>(this.route.snapshot.data['transfers']) 
  }

  openModal(id:string) {
    this.router.navigate(['dashboard', 'reports', 'withdrawals', id, 'details']);
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
    this.confirmDialogRef.componentInstance.title = 'Delete Transfer?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete these Transfer?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((fundRequest: Transfer, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<Transfer>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.transfersService.deleteTransfer(fundRequest._id).subscribe();
        })
      }
    });
    
  }

  // updateStatus(status:string) {
  //   this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
  //     disableClose: false
  //   });
  //   this.confirmDialogRef.componentInstance.title = `${status} Transfer?`;
  //   this.confirmDialogRef.componentInstance.confirmMessage = `Are you sure you want to ${status} these Transfer?`;
  //   this.confirmDialogRef.componentInstance.confirmButton = `${status}`;
  //   this.confirmDialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.selection.selected.forEach((fundRequest: Transfer, i:number) => {
  //       // this.dataSource.data.splice(i, 1);
  //       fundRequest.status = status;
  //       this.dataSource = new MatTableDataSource<Transfer>(this.dataSource.data);
  //       this.dataSource._updateChangeSubscription();
  //       this.dataSource.paginator = this.paginator;
  //       this.transfersService.updateStatusTransfer(fundRequest._id, {status, id: fundRequest.requestedBy._id}).subscribe({});
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


  deleteTransfer(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Transfers?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Transfers?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Transfer>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.transfersService.deleteTransfer(id).subscribe();
      }
    });
   
  }

  update(fundRequestId:string, event: MatSlideToggleChange) {
      this.transfersService.updateTransfer(fundRequestId, {enabled: event.checked}).subscribe((data) => {})
  }
}