import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StoresService } from '../../stores.service';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../../../../shared/services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.scss'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    CommonModule,
    MatDialogModule
  ],
})
export class AddStoresComponent implements OnInit {
  storeForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private storeService: StoresService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.storeForm = this.createProductForm();
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
      owner: [this.auth.getUser._id, Validators.required],
      merchant: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  save() {
    this.isLoading = true;
    this.storeService
      .createStore(this.storeForm.getRawValue())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => {
        this.isLoading = true;
        this.dialogRef.close(true);
      });
  }
}
