import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryZoneService } from '../../../shared/services/delivery-zone.service';
import { Location } from '@angular/common';

@Component({
  selector: 'create-delivery-zone',
  templateUrl: './create-delivery-zone.component.html',
  styleUrls: ['./create-delivery-zone.component.scss'],
})
export class CreateDeliveryZoneComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  states: any[] = [];
  localities: any[] = [];
  deliveryZonesForm = this.fb.group({
    name: ['', Validators.required],
    country: ['', Validators.required],
    states: this.fb.array(['']),
    enabled: ['', Validators.required],
    localities: this.fb.array(['']),
    localAreas: this.fb.array([]),
  });

  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryZoneService,
    public dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.addAreas();
  }

  submit() {
    if (this.deliveryZonesForm.valid) {
      this.deliveryService
        .createDeliveryZone(this.deliveryZonesForm.getRawValue())
        .subscribe((data) => {});
    }
  }

  get localAreas() {
   return this.deliveryZonesForm.get('localAreas') as FormArray
  }

  addAreas() {
    this.localAreas.push(
      this.fb.group({
      name: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
     })
    )
  }
  
  removeArea(index:number) {
    this.localAreas.removeAt(index);
  }

  add(event: MatChipInputEvent, place:string): void {
    const value = (event.value || '').trim();
	event.chipInput!.clear();
	if (place === 'states') {
		this.states.push(value);
		this.deliveryZonesForm.patchValue({states: this.states});
	} else {
		this.localities.push(value);
		this.deliveryZonesForm.patchValue({localities: this.localities});
	}  
  }

  remove(fruit: string, place: string): void {
    const index = this.states.indexOf(fruit);
    if (index >= 0) {
      if (place === 'states') {
		this.states.splice(index, 1);
        this.deliveryZonesForm.patchValue({ states: this.states });
      } else {
        this.localities.splice(index, 1);
        this.deliveryZonesForm.patchValue({ localities: this.localities });
      }
    }
  }

  

  back() {
    this.location.back();
  }

}
