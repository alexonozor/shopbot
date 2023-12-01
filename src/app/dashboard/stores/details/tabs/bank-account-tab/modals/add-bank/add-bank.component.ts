import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from '../../../../../../../shared/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankService } from 'src/app/shared/services/bank.service';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.scss']
})
export class AddBankComponent implements OnInit {
  bankForm!: FormGroup;
  isLoading: boolean = false;
  banks: any[] = [];
  selectedBank: any;
  
 
  
  public filteredDays: any[] =[];

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private bankService: BankService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.banks = this.data.banks;
    this.bankForm = this.createBankForm();
    if (!this.data.isNew) {
      this.bankForm.patchValue({code: this.data.bank.code, accountNumber: this.data.bank.accountNumber});
    }
    
  }



  createBankForm(): FormGroup {
    return this._formBuilder.group({
      accountNumber: ['', Validators.required],
      code: ['', Validators.required],
    });
  }


  selectAccount(event: MatSelectChange) {
    this.selectedBank = event.value;
    this.bankForm.patchValue({code: event.value.code})
  }


  save() {
    this.isLoading = true;
    this.bankService.resolveBank({...this.bankForm.getRawValue()})
      .pipe(
        finalize(() => this.isLoading = false)
      ).subscribe((response) => {
        if (response.status) {
          if (this.data.isNew) {
            this.bankService.addBank({
              accountName: response.data.account_name,
              accountNumber: response.data.account_number,
              bankId: response.data.bank_id,
              bankName: this.selectedBank.name,
              store: this.data.storeId,
              code: this.selectedBank.code,
              type: this.selectedBank?.type,
              currency: this.data.currency
          } as any).subscribe((data) => {
            this.dialogRef.close(data);
          })
          } else {
            this.bankService.updateBank({
              accountName: response.data.account_name,
              accountNumber: response.data.account_number,
              bankId: response.data.bank_id,
              bankName: this.selectedBank.name,
              store: this.data.storeId,
              code: this.selectedBank.code,
              type: this.selectedBank?.type,
              currency: this.data.currency
          } as any, this.data.bank._id).subscribe((data) => {
            this.snack.open("Account Details has been updated!", "Close", {duration: 2000});
            this.dialogRef.close(data);
          })
          }
          
           
        } else {
          this.snack.open("Error: Unable to verify account", "Close", {duration: 2000});
        }
      })
  }

}
