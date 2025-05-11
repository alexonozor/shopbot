import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { AdminService } from '../../../shared/services/admin.service';
import { CommonModule, Location } from '@angular/common';
import { RolesAndPermission } from '../../../shared/models/roles-and-permission';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ]
})
export class CreateAdminComponent implements OnInit {
 
  administratorForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    role: ['', Validators.required],
  });

  roles!: RolesAndPermission[]

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private location: Location,
    private route: ActivatedRoute
  ) {
   this.roles = this.route.snapshot.data['roles'] as RolesAndPermission[]
  }

  ngOnInit(): void {
    
  }

  submit() {
    if (this.administratorForm.valid) {
      this.adminService.createAdmin(this.administratorForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
