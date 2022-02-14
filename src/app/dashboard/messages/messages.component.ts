import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messageForm!: FormGroup

  

  messageSubmit() {
    console.warn(this.messageForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.createMessageForm()
  }

  createMessageForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      body: [Validators.required],
    });
  }

}
