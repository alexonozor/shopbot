import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Merchant } from 'src/app/shared/models/merchant';
import { Store } from 'src/app/shared/models/store';
import { StoreService } from '../../store.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-merchant-tab',
  templateUrl: './merchant-tab.component.html',
  styleUrls: ['./merchant-tab.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
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
    private route: ActivatedRoute,
  ) { 
    this.store = this.storeService.store;
    this.merchants = this.route.parent?.snapshot.data['merchants'] as Merchant[];
  }

  ngOnInit(): void {
    this.generalSettingForm = this.createGeneralSettingForm();
    
    // Subscribe to merchant value changes
    this.generalSettingForm.get('merchant')?.valueChanges.subscribe(value => {
      this.generalSettingForm.patchValue({ owner: value }, { emitEvent: false });
    });
  }

  createGeneralSettingForm(): FormGroup {
    return this._formBuilder.group({
      merchant: [this.store?.merchant, Validators.required],
      owner: [this.store?.merchant, Validators.required],
    })
  }

  save() {
    this.isLoading = true;
    // Ensure owner matches merchant before saving
    const formValue = this.generalSettingForm.getRawValue();
    formValue.owner = formValue.merchant;
    
    // this.store.paused = !this.store.paused;
    this.storeService.saveStore(formValue, this.store._id)
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
