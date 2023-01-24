import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Merchant } from 'src/app/shared/models/merchant';
import { Store } from 'src/app/shared/models/store';
import { CreateMerchantComponent } from '../../../../merchants/create-merchant/create-merchant.component';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-merchant-tab',
  templateUrl: './merchant-tab.component.html',
  styleUrls: ['./merchant-tab.component.scss']
})
export class MerchantTabComponent implements OnInit {
  @Input() store: Store | any;
  @Input() merchants!: Merchant[];
  generalSettingForm!: FormGroup
  isLoading!: boolean;
  
  constructor(
    public _matDialog: MatDialog,
    public router: Router,
    private _formBuilder: FormBuilder,
    private storeService: StoreService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.generalSettingForm = this.createGeneralSettingForm();
  }

  createGeneralSettingForm(): FormGroup {
    return this._formBuilder.group({
      merchant: [this.store.merchant, Validators.required]
    })
  }

  save() {
    this.isLoading = true;
    this.store.paused = !this.store.paused;
    this.storeService.saveStore(this.generalSettingForm.getRawValue(), this.store._id)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((store) => {
        this._snackBar.open('Saved', 'ok', {
          duration: 5000
        });
        this.storeService.getStore()
        this.storeService.onStoreChanged
      })
  }


 
  addMerchant() {
    this.router.navigate(['dashboard', 'merchants', 'new'])
  }

}
