import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryZoneService } from '../../../shared/services/delivery-zone.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';

@Component({
  selector: 'create-delivery-zone',
  templateUrl: './create-delivery-zone.component.html',
  styleUrls: ['./create-delivery-zone.component.scss'],
})
export class CreateDeliveryZoneComponent implements OnInit {
  deliveryZonesForm!: FormGroup;
  zones!: DeliveryZone;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryZoneService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
   
    this.deliveryZonesForm = this.fb.group({
      country: ['', Validators.required],
      countryCode: ['', Validators.required],
      currencyCode: ['', Validators.required],
      currency: ['', Validators.required],
      image: ['', Validators.required],
      states: this.fb.array([]),
      enabled: ['', Validators.required],
    });
    
  }

  getLocalities(state: FormGroup | any) {
    return state.get('localities') as FormArray;
  }

  get states() {
    return this.deliveryZonesForm.get('states') as FormArray
  }

  addStates(): any {
    const state = this.fb.group({
      name: ['', Validators.required],
      localities: this.fb.array([])
    })
    this.states.push(state)
    this.addLocality(state)
  }

  addLocality(state?: any) {
    const locality = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      enabled: [false],
    })
    state.get('localities').push(locality);
  }

  removeLocality(state: FormGroup | any, index: number) {
    state.get('localities').removeAt(index);
  }

  removeState(index: number) {
    this.states.removeAt(index);
  }

  submit() {
    this.deliveryService.createDeliveryZone(this.deliveryZonesForm.getRawValue())
      .subscribe((data) => { });
  }

  back() {
    this.location.back();
  }

}
