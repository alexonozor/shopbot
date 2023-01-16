import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RolesAndPermission } from 'src/app/shared/models/roles-and-permission';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Admin } from 'src/app/shared/models/admin';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {

  administratorForm: FormGroup;
  admin: Admin
  roles!: RolesAndPermission[]

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private location: Location,
    private route: ActivatedRoute
  ) {
   this.roles = this.route.snapshot.data['roles'] as RolesAndPermission[]
   this.admin = this.route.snapshot.data['admin'] as Admin
    this.administratorForm = this.fb.group({
      name: [this.admin.name, Validators.required],
      phoneNumber: [this.admin.phoneNumber, Validators.required],
      gender: [this.admin.gender, Validators.required],
      email: [this.admin.email, Validators.email],
      role: [this.admin?.role?._id, Validators.required],
    })
  }

  ngOnInit(): void {}

  submit() {
    if (this.administratorForm.valid) {
      this.adminService.updateAdmin(this.admin._id, this.administratorForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
