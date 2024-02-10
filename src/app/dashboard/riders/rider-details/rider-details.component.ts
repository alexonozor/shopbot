import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RidersService } from 'src/app/shared/services/rider.service';
import { Rider } from 'src/app/shared/models/rider';
import { Location } from '@angular/common';


@Component({
  selector: 'app-rider-details',
  templateUrl: './rider-details.component.html',
  styleUrls: ['./rider-details.component.scss']
})
export class RiderDetailsComponent implements OnInit {

  riderForm: FormGroup;
  rider: Rider

  constructor(
    private fb: FormBuilder,
    private riderService: RidersService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.rider = this.route.snapshot.data['rider'] as Rider;
    
    this.riderForm = this.fb.group({
      firstName: [this.rider.firstName, Validators.required],
      lastName: [this.rider.lastName, Validators.required],
      phoneNumber: [this.rider.phoneNumber, Validators.required],
      gender: [this.rider.gender, Validators.required],
      email: [this.rider.email, [Validators.email,  Validators.required]],
      dateOfBirth:  [this.rider.dateOfBirth, Validators.required],
      address: [this.rider.address, Validators.required],
      state: [this.rider.state, Validators.required],
      country: [this.rider.country, Validators.required],
      localGovt: [this.rider.country, Validators.required],
      yearsOfExperience: [this.rider.yearsOfExperience, Validators.required],
      vehicle: [this.rider.vehicle, Validators.required],
      location: this.fb.group({
        type: 'Point',
        coordinates: []
      })
    });
  
    
  }

  ngOnInit(): void {}

  submit() {
    if (this.riderForm.valid) {
      this.riderService.updateRider(this.rider._id, this.riderForm.getRawValue()).subscribe((data:any) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
