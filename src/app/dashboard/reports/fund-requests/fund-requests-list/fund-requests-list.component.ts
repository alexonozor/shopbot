import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FundRequest } from 'src/app/shared/models/fund-request';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FundRequestsService } from 'src/app/shared/services/fund-request.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-fund-requests-list',
  templateUrl: './fund-requests-list.component.html',
  styleUrls: ['./fund-requests-list.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule
  ]
})


export class FundRequestsListComponent implements OnInit {

  public displayedColumns: string[] = ['select', 'createdAt', 'requestedBy', 'category', 'status', 'items', 'total',  'actions'];
  public dataSource = new MatTableDataSource<FundRequest>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  

  constructor(
    private route: ActivatedRoute,
    private fundRequestsService: FundRequestsService,
    private _matDialog: MatDialog
  ) { }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<FundRequest>(this.route.snapshot.data['funds']) 
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
        this.selection.selected.forEach((fundRequest: FundRequest, i:number) => {
        this.dataSource.data.splice(i, 1);
        this.dataSource = new MatTableDataSource<FundRequest>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.fundRequestsService.deleteFundRequests(fundRequest._id).subscribe();
        })
      }
    });
    
  }

  updateStatus(status:string) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = `${status} Fund Request?`;
    this.confirmDialogRef.componentInstance.confirmMessage = `Are you sure you want to ${status} these Fund Request?`;
    this.confirmDialogRef.componentInstance.confirmButton = `${status}`;
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selection.selected.forEach((fundRequest: FundRequest, i:number) => {
        // this.dataSource.data.splice(i, 1);
        fundRequest.status = status;
        this.dataSource = new MatTableDataSource<FundRequest>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.fundRequestsService.updateStatusFundRequests(fundRequest._id, {status, id: fundRequest.requestedBy._id}).subscribe({});
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


  deleteFundRequest(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Fund Requests?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this Fund Requests?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<FundRequest>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.fundRequestsService.deleteFundRequests(id).subscribe();
      }
    });
   
  }

  update(fundRequestId:string, event: MatSlideToggleChange) {
      this.fundRequestsService.updateFundRequests(fundRequestId, {enabled: event.checked}).subscribe((data) => {})
  }

}
