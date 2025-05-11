import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { RolesAndPermissionsService } from 'src/app/shared/services/roles-and-permissions.service';
import { MediaComponent } from '../../media/media.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-new-roles-and-permissions',
  templateUrl: './new-roles-and-permissions.component.html',
  styleUrls: ['./new-roles-and-permissions.component.scss'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule
  ]
})
export class NewRolesAndPermissionsComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits!: Observable<string[]>;
  permissions: string[] = [];
  allFruits: string[] = [
  'Add_media', 'Edit_media', 'Update_media', 'Delete_media', 'Read_media',
  'Add_roles', 'Edit_roles', 'Update_roles', 'Delete_roles', 'Read_roles',
  'Add_messaging', 'Edit_messaging', 'Update_messaging', 'Delete_messaging', 'Read_messaging',
  'Add_cuisine', 'Edit_cuisine', 'Update_cuisine', 'Delete_cuisine', 'Read_cuisine',
  'Add_order', 'Edit_order', 'Update_order', 'Delete_order', 'Read_order',
  'Add_customer', 'Edit_customer', 'Update_customer', 'Delete_customer', 'Read_customer',
  'Add_store', 'Edit_store', 'Update_store', 'Delete_store', 'Read_store'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;
  rolesForm = this.fb.group({
    name: ['', Validators.required],
    permissions: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private permissionService: RolesAndPermissionsService,
    private location: Location,
    public dialog: MatDialog
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  ngOnInit(): void {}

  submit() {
    if (this.rolesForm.valid) {
      this.permissionService.createPermission(this.rolesForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back();
  }



  get permission() {
    return this.rolesForm.get('permissions') as FormArray
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.permissions.push(value);
      this.permission.push(this.fb.control(value))
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.permissions.indexOf(fruit);

    if (index >= 0) {
      this.permissions.splice(index, 1);
      this.permission.removeAt(index)
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.permissions.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    this.permission.push(this.fb.control(event.option.viewValue))
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
 

  

}
