import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MenusService } from '../../list/menus.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { Menu } from 'src/app/shared/models/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit-menus',
  templateUrl: './edit-menus.component.html',
  styleUrls: ['./edit-menus.component.scss'],
  standalone: true,
  providers: [AuthService, MenusService],
  imports: [
    FlexLayoutModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule
  ]
})
export class EditMenusComponent implements OnInit {
  menuForm: FormGroup | any;
  isLoading: boolean = false;

  private storeId!: string;
  public menu: Menu;

  constructor(
    private _formBuilder: FormBuilder,
    private menusService: MenusService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.storeId = this.data.storeId;
    this.menu = this.data.menu as Menu;
  }

  ngOnInit() {
    this.menuForm = this.createMenuForm();
    
  }

  createMenuForm(): FormGroup {
    return this._formBuilder.group({
      name: [this.menu.name, Validators.required],
      store: [this.storeId, Validators.required],
      activate: [this.menu.activate, Validators.required],
    });
  }

  save() {
    this.isLoading = true;
    this.menusService.updateMenu(this.menu._id, this.menuForm.getRawValue())
      .pipe(
        finalize(() => this.isLoading = false)
      ).subscribe((data) => {
        this.isLoading = true;
        this.dialogRef.close(true);
      })
  }

  

}
