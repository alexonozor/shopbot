import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from 'src/app/shared/services/settings.service'
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-version-settings',
  templateUrl: './version-settings.component.html',
  styleUrls: ['./version-settings.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class VersionSettingsComponent implements OnInit {

  versionForm: FormGroup;
  version: any;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private location: Location,
    private route: ActivatedRoute
  ) {
   this.version = this.route.snapshot.data['version'] as any
    this.versionForm = this.fb.group({
      iosUserVersion:          [this.version.iosUserVersion, Validators.required],
      iosUserAppURL:           [this.version.iosUserAppURL, Validators.required],
      iosUserVersionMandatory: [this.version.iosUserVersionMandatory, Validators.required],

      iosVendorVersion:   [this.version.iosVendorVersion, Validators.required],
      iosVendorAppURL:    [this.version.iosVendorAppURL, Validators.required],
      iosVendorMandatory: [this.version.iosVendorMandatory, Validators.required],

      androidUserVersion:          [this.version.androidUserVersion, Validators.required],
      androidUserAppURL:           [this.version.androidUserAppURL, Validators.required],
      androidUserVersionMandatory: [this.version.androidUserVersionMandatory, Validators.required],

      androidVendorVersion: [this.version.androidVendorVersion, Validators.required],
      androidVendorAppURL:  [this.version.androidVendorAppURL, Validators.required],
      androidVendorMandatory:  [this.version.androidVendorMandatory, Validators.required],
    })
  }


  ngOnInit(): void {}

  submit() {
    if (this.versionForm.valid) {
      this.settingsService.versionUpdate(this.versionForm.getRawValue()).subscribe((data) => {
        this.location.back();
      })
    }
  }

  back() {
    this.location.back()
  }

}
