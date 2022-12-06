import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';
import { RolesAndPermissionsService } from 'src/app/shared/services/roles-and-permissions.service';
import { ActivatedRoute } from '@angular/router';
import { RolesAndPermission } from '../../../shared/models/roles-and-permission';

@Component({
  selector: 'app-edit-roles-and-permissions',
  templateUrl: './edit-roles-and-permissions.component.html',
  styleUrls: ['./edit-roles-and-permissions.component.scss']
})
export class EditRolesAndPermissionsComponent implements OnInit {

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
  rolesForm!: FormGroup
  rolePermission!: RolesAndPermission

  constructor(
    private fb: FormBuilder,
    private permissionService: RolesAndPermissionsService,
    private location: Location,
    public dialog: MatDialog,
    public route: ActivatedRoute
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
    this.rolePermission = this.route.snapshot.data['permission'] as RolesAndPermission;
     this.permissions = this.rolePermission.permissions
    this.rolesForm = this.fb.group({
      name: [this.rolePermission.name, Validators.required],
      permissions: this.fb.array([]),
    });

  }

  ngOnInit(): void {
     this.rolePermission.permissions.map((p) => {
       this.permission.push(this.fb.control(p))
     })
  
  }

  submit() {
    if (this.rolesForm.valid) {
      this.permissionService.updatePermission(this.rolePermission._id, this.rolesForm.getRawValue()).subscribe((data) => {
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
