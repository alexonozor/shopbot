import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Store } from 'src/app/shared/models/store';
import { Bank } from 'src/app/shared/models/bank';
import { BankService } from '../../../../../shared/services/bank.service';
import { AddBankComponent } from './modals/add-bank/add-bank.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActivatedRoute } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-bank-account-tab',
  templateUrl: './bank-account-tab.component.html',
  styleUrls: ['./bank-account-tab.component.scss'],
  standalone: true,
  imports: [
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    BankService
  ]
  
})
export class BankAccountTabComponent implements OnInit {
  @Input() store: Store | any;
  public $bank!: Observable<Bank>;
  public $banks!: Observable<any[]>;
  public bankList: any[] = [];


  constructor(
   
    private bankService: BankService,
    private _matDialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.store = this.route.parent?.parent?.snapshot.data['store'] as Store
   }

  ngOnInit(): void {
    this.getStoreBank()
    this.getBankLists();
  }

  getStoreBank() {
    this.$bank = this.bankService.getStoreBank(this.store);
  }

  getBankLists() {
    this.$banks = this.bankService.getBanksLists().pipe(
      map((banks) => this.bankList = banks.data)
    )
  }

  addAccountDetails(isNew: boolean, bank?: Bank) {
    let addStoreForm = this._matDialog.open(AddBankComponent, {
      disableClose: false,
      data: { storeId: this.store._id, banks: this.bankList, isNew, bank, currency: this.store.currency }
    });
    addStoreForm.afterClosed().subscribe(result => {
      if (result) {
        this.getStoreBank();
      }
    });
  }


}
