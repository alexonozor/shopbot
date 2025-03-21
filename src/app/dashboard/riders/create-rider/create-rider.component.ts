import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { AdminService } from '../../../shared/services/admin.service';
import { CommonModule, Location } from '@angular/common';
import { RolesAndPermission } from '../../../shared/models/roles-and-permission';
import { ActivatedRoute } from '@angular/router';
import { Rider } from 'src/app/shared/models/rider';
import { RidersService } from 'src/app/shared/services/rider.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-rider',
  templateUrl: './create-rider.component.html',
  styleUrls: ['./create-rider.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class CreateRiderComponent implements OnInit {
 
  riderForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.email,  Validators.required]],
    dateOfBirth:  ['', Validators.required],
    address: ['', Validators.required],
    stateOfOrigin: ['', Validators.required],
    country: ['', Validators.required],
    localGovt: ['', Validators.required],
    yearsOfExperience: ['', Validators.required],
    password: ['', Validators.required],
    vehicle: ['', Validators.required],
    location: this.fb.group({
      type: 'Point',
      coordinates: []
    })
  });

  constructor(
    private fb: FormBuilder,
    private riderService: RidersService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit() {
    if (this.riderForm.valid) {
      this.riderService.createRider(this.riderForm.getRawValue()).subscribe((data:Rider) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
