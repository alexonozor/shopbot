import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenusService } from '../../list/menus.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-menus',
  templateUrl: './add-menus.component.html',
  styleUrls: ['./add-menus.component.scss'],
  standalone: true,
  providers: [
    AuthService,
    MenusService
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AddMenusComponent implements OnInit {
  menuForm: FormGroup | any;
  isLoading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private auth: AuthService,
    private menusService: MenusService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.menuForm = this.createMenuForm();
  }

 

  createMenuForm(): FormGroup {
    return this._formBuilder.group({
      name: ['', Validators.required],
      store: [this.data.storeId, Validators.required],
      activate: [false, Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.menusService.createMenu(this.menuForm.getRawValue())
      .pipe(
        finalize(() => this.isLoading = false)
      ).subscribe((data) => {
        console.log(data);
        this.isLoading = true;
        this.dialogRef.close(true);
      })
  }
}
