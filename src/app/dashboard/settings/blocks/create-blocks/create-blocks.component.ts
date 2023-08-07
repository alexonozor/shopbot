import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { StoresService } from 'src/app/dashboard/stores/stores.service';
import { AuthService } from 'src/app/shared/services';
import { SettingsService } from 'src/app/shared/services/settings.service';


@Component({
  selector: 'app-create-blocks',
  templateUrl: './create-blocks.component.html',
  styleUrls: ['./create-blocks.component.scss']
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
    {name: 'Cuisines', value:  'cuisine'}
  ]

  constructor(
    private _formBuilder: FormBuilder,
    private settingsService: SettingsService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit() {
    this.blockForm = this.createProductForm()
  }

  createProductForm(): FormGroup {
    return this._formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      content: ['', Validators.required],
      useAggrregateQuery: ['', Validators.required],
      query: [''],
      country: ['', Validators.required],
      cities: ['', Validators.required],
      metaQuery: this._formBuilder.group({
        params: [''],
        controls: [''],
        url: [''],
      }),
      active: [false, Validators.required],
      orientation: ['', Validators.required],
    });
  }


  save() {
    this.isLoading = true;
    this.settingsService.creatBlock(this.blockForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      this.dialogRef.close(true);
    })
  }

}
