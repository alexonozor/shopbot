import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Media } from 'src/app/shared/models/media';
import { MediaService } from 'src/app/shared/services/media.service';
import { CommonModule } from '@angular/common';
import { FileMediaCardComponent } from 'src/app/shared/components/file-media-card/file-media-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'portal-lists-all-media',
  templateUrl: './lists-all-media.component.html',
  styleUrls: ['./lists-all-media.component.scss'],
  imports: [
    CommonModule,
    FileMediaCardComponent,
    FlexLayoutModule
  ]
})
export class ListsAllMediaComponent implements OnInit {
  media$!: Observable<Media[]>
  @Input() events!: Observable<void>;
  @Output() browseMediaEvent: EventEmitter<any> = new EventEmitter();
  @Output() chosenMediaEvent: EventEmitter<any> = new EventEmitter();

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.events.subscribe(() => {
      this.loadMedias();
    });
    this.loadMedias()
  }

  loadMedias() {
    this.media$ = this.mediaService.getMedias()
  }

  delete(id:string) {
    this.mediaService.deleteMedia(id).subscribe(() => {
          this.loadMedias();
    });
  }

  openMedia() {
    this.browseMediaEvent.emit();
  }

  selectedMedia(media:Media, medias:Media[]) {
    medias.forEach((media) => {
      media['isSelected'] = false;
    })

    media['isSelected'] = true;

    this.chosenMediaEvent.emit(media);
    
  }

}
