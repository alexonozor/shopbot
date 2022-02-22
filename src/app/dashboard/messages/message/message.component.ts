import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messageForm!: FormGroup
  isLoading: boolean | undefined;
  dialogRef: any;

  constructor(
    private fb: FormBuilder,
    private messagesService: MessagesService
    ) { }

  ngOnInit() {
    this.messageForm = this.createMessageForm()
  }

  createMessageForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      message: ['',  Validators.required],
    });
  }

  messageSubmit() {
    this.isLoading = true;
    this.messagesService.createMessage(this.messageForm.getRawValue())
    .pipe(
      finalize(() => this.isLoading = false)
    ).subscribe((data) => {
      this.isLoading = true;
      console.warn(data)
      this.dialogRef.close(true);
    })  }


}
