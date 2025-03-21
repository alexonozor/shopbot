import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';
import { CommonModule, Location } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'edit-delivery-zone',
  templateUrl: './edit-delivery-zone.component.html',
  styleUrls: ['./edit-delivery-zone.component.scss'],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatInputModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class EditDeliveryZoneComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
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
    this.zones = this.route.snapshot.data['delivery'];
    this.deliveryZonesForm = this.fb.group({
      country: [this.zones.country, Validators.required],
      countryCode: [this.zones.countryCode, Validators.required],
      currencyCode: [this.zones.currencyCode, Validators.required],
      currency: [this.zones.currency, Validators.required],
      image: [this.zones.image, Validators.required],
      states: this.fb.array([]),
      enabled: [this.zones.enabled, Validators.required],
    });
    
    this.zones?.states?.forEach((state) => {
      const stateGroup = this.fb.group({
        name: [state.name],
        localities: this.fb.array([]),
      });
      const localitiesArray = stateGroup.get('localities') as FormArray;
      state.localities?.forEach((locality) => {
        const localityGroup = this.fb.group({
          name: [locality.name],
          longitude: [locality.longitude],
          latitude: [locality.latitude],
          enabled: [locality.enabled],
        });
        localitiesArray.push(localityGroup);
      });
      this.states.push(stateGroup);
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
    this.deliveryService.updateDeliveryZone(this.zones._id, this.deliveryZonesForm.getRawValue())
      .subscribe((data) => { 
        this.location.back();
      });
  }

  back() {
    this.location.back();
  }
}
