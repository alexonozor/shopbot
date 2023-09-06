import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { Store } from 'src/app/shared/models/store';
import { StoreService } from '../../store.service';
import { Bank } from 'src/app/shared/models/bank';
import { BankService } from '../../../../../shared/services/bank.service';
import { AddBankComponent } from './modals/add-bank/add-bank.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-account-tab',
  templateUrl: './bank-account-tab.component.html',
  styleUrls: ['./bank-account-tab.component.scss']
})
export class BankAccountTabComponent implements OnInit {
  @Input() store: Store | any;
  public $bank!: Observable<Bank>;
  public $banks!: Observable<any[]>;
  public bankList: any[] = [];


  constructor(
    private _formBuilder: FormBuilder,
    private storeService: StoreService,
    private bankService: BankService,
    private _snackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) { }

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
