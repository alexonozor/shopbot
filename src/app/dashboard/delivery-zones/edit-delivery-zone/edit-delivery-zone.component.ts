import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { DeliveryZoneService } from 'src/app/shared/services/delivery-zone.service';
import { Location } from '@angular/common';

@Component({
  selector: 'edit-delivery-zone',
  templateUrl: './edit-delivery-zone.component.html',
  styleUrls: ['./edit-delivery-zone.component.scss'],
})
export class EditDeliveryZoneComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  deliveryZonesForm!: FormGroup;
  zones!: DeliveryZone;
  selectable = true;
  removable = true;
  addOnBlur = true;
  stateCtrl = new FormControl();
  localCtrl = new FormControl();
  isLoading: boolean = false;

  @ViewChild('stateInput', {static: false}) stateInput!: ElementRef<HTMLInputElement>;
  @ViewChild('localInput', {static: false}) localInput!: ElementRef<HTMLInputElement>;

  
  constructor(
    private fb: FormBuilder,
    private deliveryService: DeliveryZoneService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private deliveryZonesService: DeliveryZoneService,
    private _matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.zones = this.route.snapshot.data['delivery'];
    this.deliveryZonesForm = this.fb.group({
      name: [this.zones.name, Validators.required],
      country: [this.zones.country, Validators.required],
      states: this.fb.array(this.zones.states),
      enabled: [this.zones.enabled, Validators.required],
      localities: this.fb.array(['']),
      localAreas: this.fb.array([]),
    }); 
    this.zones.localAreas.forEach((data) => {
      this.addAreas(data);
    })
    
  }

  get localAreas() {
    return this.deliveryZonesForm.get('localAreas') as FormArray
   }

  addAreas(data?:any) {
    this.localAreas.push(
      this.fb.group({
      name: [data ? data.name : '', Validators.required],
      latitude: [data ? data.latitude : '', Validators.required],
      longitude: [data ? data.longitude : '', Validators.required],
     })
    )
  }
  
  removeArea(index:number) {
    this.localAreas.removeAt(index);
  }

  remove(index: number, side:string): void {
    if (index >= 0) {
      if (side == 'state') {
        this.zones.states.splice(index, 1);
      } else {
        this.zones.localities.splice(index, 1);
      }
    } 
  }

  add(event: MatChipInputEvent, side: string): void {
    const value = (event.value || '').trim();
    if (side == 'state') {
      if (value) {
        this.zones.states.push(value);
      }
    } else {
      if (value) {
        this.zones.localities.push(value);
      }
    }
    
    event.chipInput!.clear();
  }


  submit() {
      this.deliveryService.updateDeliveryZone(this.zones._id, {
        ...this.deliveryZonesForm.getRawValue(),
        ...{localities: this.zones.localities, states: this.zones.states },
      })
        .subscribe((data) => {});
    
  }


  back() {
    this.location.back();
  }
}
