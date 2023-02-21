
import { map, tap } from 'rxjs/operators';
import {AfterViewInit, OnInit, Component, ViewChild, Input, ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Socket } from 'ngx-socket-io';
import { StoreService } from '../../store.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-finance-details-tab',
  templateUrl: './finance-details.component.html',
  styleUrls: ['./finance-details.component.scss']
})
export class FinanceDetailsComponent implements OnInit, AfterViewInit {
  @Input() store!: any;
  public orders$!: Observable<any[]>;
  displayedColumns: string[] = ['reference', 'date',  'orderAmount', 'adminCommission', 'vendorEarning'];
  dataSource: MatTableDataSource<any[]>;
  
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatSort) sort!: MatSort;
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
 

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

  get getVendorCost() {
    let total = 0;
    for (const data of this.dataSource.data as any) {
     let d = (data.total - (data.total * this.store.finance.adminCommission / 100))
     console.log(d)
      total +=d;
      
    }
    return total;
  }

 get  getShopbotTotal() {
    return this.getTotalCost - this.getVendorCost
  }

  print() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html,  
     styles:{
      'with-margin':{ // we define the class called "red"
        marginBottom: 5,
      },
      'amount':{ // we define the class called "red"
        marginBottom: 5,
        bold:true
      },
      'fill':{ // we define the class called "red"
        marginBottom: 5,
        bold:true,
        fillColor:'green'
      }
    } };
    pdfMake.createPdf(documentDefinition).download(); 
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


