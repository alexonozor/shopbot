import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { SettingsService } from 'src/app/shared/services/settings.service';
import { Block } from 'src/app/shared/models/block';
import { DeliveryZone } from 'src/app/shared/models/delivery-zone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-blocks',
  templateUrl: './edit-blocks.component.html',
  styleUrls: ['./edit-blocks.component.scss'],
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
export class EditBlocksComponent implements OnInit {
  blockForm!: FormGroup;
  isLoading: boolean = false;
  block!: Block;
  zones!: DeliveryZone[]
  selectedStates: any = []
  types = [
    {name: 'Categories', value: 'category'}, 
    {name: 'Store grid', value:  'store-grid'},
    {name: 'Store List', value:  'store-list'},
    {name: 'Sliders', value:  'slider'},
    {name: 'Food items', value:  'food'},
    {name: 'Cuisines', value:  'cuisine'},
    {name: 'Ads', value:  'ads'},
  ]

  constructor(
    private _formBuilder: FormBuilder,
    private settingsService: SettingsService,
    public dialogRef: MatDialogRef<any>,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { 
      this.block = data.block
      this.zones = data.zones
    }

  ngOnInit() {
    this.getSelectedCountry(this.block.country)
    this.blockForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      title: [this.block.title, Validators.required],
      type: [this.block.type, Validators.required],
      content: [this.block.content, Validators.required],
      useAggrregateQuery: [this.block.useAggrregateQuery, Validators.required],
      query: [this.block.query, Validators.required],
      country: [this.block.country, Validators.required],
      states: [this.block.states, Validators.required],
      orientation: [this.block.orientation, Validators.required],
      metaQuery: this._formBuilder.group({
        params: [this.block.metaQuery.params],
        controls: [this.block.metaQuery.controls],
        url: [this.block.metaQuery.url],
      }),
      active: [this.block.active, Validators.required],
    });
  }


  getSelectedCountry(value:string) {
     const country = this.zones.find((zone) => zone.country == value)
     this.selectedStates = country?.states
  }


  save() {
    this.isLoading = true;
    let data = this.blockForm.getRawValue()
    // data.metaQuery.params = JSON.parse(data.metaQuery.params)
    // console.log(data.params)
    this.settingsService.updateBlock(this.block._id, data)
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      this.dialogRef.close(true);
    })
  }
}
