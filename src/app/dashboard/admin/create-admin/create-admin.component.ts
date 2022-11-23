import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { AdminService } from '../../../shared/services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.scss']
})
export class CreateAdminComponent implements OnInit {

  administratorForm = this.fb.group({
    name: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.administratorForm.valid) {
      this.adminService.createAdmin(this.administratorForm.getRawValue()).subscribe((data) => {
        this.location.back()
      })
    }
  }

  back() {
    this.location.back()
  }

}
