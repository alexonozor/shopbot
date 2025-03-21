import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Transaction } from 'src/app/shared/models/transaction';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TransactionsService } from 'src/app/shared/services/transaction.service';
import { Router } from '@angular/router';
import { FinancesService } from 'src/app/shared/services/finance.service';
import * as moment from 'moment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tap, distinctUntilChanged, forkJoin, catchError, switchMap, Observable, startWith } from 'rxjs';
const startOfMonth = moment().startOf('month').toDate() as any
const endOfMonth   = moment().endOf('month').toDate() as any
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule, MatDateSelectionModel } from '@angular/material/datepicker';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.vfs;

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule
  ]
})


export class FinanceListComponent implements OnInit {
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  finances$!: Observable<any>;
  range = new FormGroup({
    country: new FormControl< null | string>('Nigeria'),
    start: new FormControl<Date | null | string>(startOfMonth),
    end: new FormControl<Date | null | string>(endOfMonth),
  });
  defaultCurrency: any = '₦'
  isLoading = false;
  deliveries: DeliveryZone[] = [];
  
  
  constructor(
    private route: ActivatedRoute,
    private financesService: FinancesService,
    private _matDialog: MatDialog,
    private router: Router
  ) {}

  ngAfterViewInit() {}

  changeCurrency(event: any) {
    const delivery = this.deliveries.find((delivery) => delivery.country == event.value)
    this.defaultCurrency =  delivery?.currency
  }

  ngOnInit(): void {
    this.deliveries = this.route.snapshot.data['deliveries']
    this.getFinances() 
  }

  openModal(id:string) {
    this.router.navigate(['dashboard', 'reports', 'payouts', id, 'details']);
  }

  getFinances() { 
   this.finances$ = this.range.valueChanges.pipe(
      tap(() => this.isLoading =  true),
      distinctUntilChanged(),
      startWith({start: startOfMonth, end: endOfMonth, country: 'Nigeria' }),
      switchMap((date:any) => this.financesService.getFinances(date)))
  }

  public exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
  }

}