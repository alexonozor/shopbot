import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Media } from '../../models/media';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-file-media-card',
  templateUrl: './file-media-card.component.html',
  styleUrls: ['./file-media-card.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class FileMediaCardComponent {
  @Input() media!: Media;
  @Output() deleteMedia: EventEmitter<any> = new EventEmitter();
  @Output() selectedMedia: EventEmitter<any> = new EventEmitter();

  

  delete() {
      this.deleteMedia.emit();
  }

  select(media: Media) {
    this.selectedMedia.emit(media)
  }

}
