import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

export interface SendEmailData {
  html: string;
  templateName?: string;
}

@Component({
  selector: 'app-send-email-modal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    FlexLayoutModule
  ],
  templateUrl: './send-email-modal.component.html',
  styleUrls: ['./send-email-modal.component.scss']
})
export class SendEmailModalComponent {
  sendForm: FormGroup;
  isSending = false;

  availableCountries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'KE', name: 'Kenya' },
    { code: 'GH', name: 'Ghana' },
    // Add more countries as needed
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SendEmailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendEmailData
  ) {
    this.sendForm = this.fb.group({
      subject: ['', Validators.required],
      type: ['User', Validators.required],
      to: [''],
      countries: [[]],
      data: ['{}', [Validators.required, this.jsonValidator]]
    });
  }

  jsonValidator(control: any) {
    try {
      JSON.parse(control.value);
      return null;
    } catch (e) {
      return { invalidJson: true };
    }
  }

  onTypeChange() {
    const type = this.sendForm.get('type')?.value;
    const toControl = this.sendForm.get('to');
    
    if (type === 'Custom') {
      toControl?.setValidators([Validators.required, Validators.email]);
    } else {
      toControl?.clearValidators();
    }
    toControl?.updateValueAndValidity();
  }

  onSend() {
    if (this.sendForm.valid) {
      const formValue = this.sendForm.value;
      let parsedData = {};
      
      try {
        parsedData = JSON.parse(formValue.data);
      } catch (e) {
        console.error('Invalid JSON data');
        return;
      }

      const payload = {
        subject: formValue.subject,
        html: this.data.html,
        data: parsedData,
        type: formValue.type === 'Custom' ? 'User' : formValue.type,
        ...(formValue.type === 'Custom' ? { to: formValue.to } : {}),
        ...(formValue.type !== 'Custom' && formValue.countries?.length > 0 ? { countries: formValue.countries } : {})
      };

      this.isSending = true;
      this.dialogRef.close(payload);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
