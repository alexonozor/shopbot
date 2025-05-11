import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { StoresService } from 'src/app/dashboard/stores/stores.service';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { AuthService } from 'src/app/shared/services';
import { SettingsService } from 'src/app/shared/services/settings.service';


@Component({
  selector: 'app-create-blocks',
  templateUrl: './create-blocks.component.html',
  styleUrls: ['./create-blocks.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class CreateBlocksComponent implements OnInit {

  blockForm!: FormGroup;
  isLoading: boolean = false;
  types = [
    {name: 'Categories', value: 'category'}, 
    {name: 'Store grid', value:  'store-grid'},
    {name: 'Store List', value:  'store-list'},
    {name: 'Sliders', value:  'slider'},
    {name: 'Food items', value:  'food'},
    {name: 'Cuisines', value:  'cuisine'},
    {name: 'Ads', value:  'ads'},
  ]
  zones!: DeliveryZone[]
  selectedStates: any = []

  constructor(
    private _formBuilder: FormBuilder,
    private settingsService: SettingsService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.blockForm = this.createProductForm()
    this.zones = this.data.zones as DeliveryZone[];
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      content: ['', Validators.required],
      useAggrregateQuery: ['', Validators.required],
      query: [''],
      country: ['', Validators.required],
      states: ['', Validators.required],
      metaQuery: this._formBuilder.group({
        params: [''],
        controls: [''],
        url: [''],
      }),
      active: [false, Validators.required],
      orientation: ['', Validators.required],
    });
  }

  getSelectedCountry(event:any) {
    const country = this.zones.find((zone) => zone.country == event.value)
    this.selectedStates = country?.states
 }


  save() {
    this.isLoading = true;
    this.settingsService.createBlock(this.blockForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      this.dialogRef.close(true);
    })
  }

}
