import { Component, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Media } from 'src/app/shared/models/media';
import { MediaService } from 'src/app/shared/services/media.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListsAllMediaComponent } from './tabs/lists-all-media/lists-all-media.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  imports: [
    RouterModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTabsModule,
    ListsAllMediaComponent,
    MatIconModule,
    FlexLayoutModule,
    CommonModule,
    MatButtonModule
  ]
})
export class MediaComponent implements OnInit {
  public selectedTab = 0;
  uploadProgress!: any;
  uploadProgressBanner!: any;
  uploadSubBanner: any;
  isLoading!: boolean;
  fileName!: string;
  uploadSub: any;
  eventsSubject: Subject<void> = new Subject<void>();
  selectedMediaData!: Media
  
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private mediaService: MediaService,
    @Optional() public dialogRef: MatDialogRef<MediaComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Media,
  ) { 
   
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.selectedTab = params.tab || 0;
    });
  }

  public tabChanged(event: MatTabChangeEvent) {
    const queryParams: Params = Object.assign({}, this.route.snapshot.queryParams);
    queryParams['tab'] = event.index;
    this.router.navigate(['.'], { queryParams: queryParams, relativeTo: this.route });
}

  back() {
    this.location.back();
  }

  emitEventToChild() {
    this.eventsSubject.next();
  }

  onFileLogoSelected(event: any) {
    this.uploadProgress = 0
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file);
      const upload$ = this.mediaService.saveMedia(formData)
        .pipe(
          finalize(
            () => this.reset()
          )
        );
      this.uploadSub = upload$.subscribe((event:any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        // eslint-disable-next-line no-prototype-builtins
        } else if (event.hasOwnProperty('body')) {
          // this.store.logo = event.body.photo;
        }
      })
    }
  }

  selectedMedia(event: Media) {
    this.selectedMediaData = event;
  }

  selectMedia() {
    this.dialogRef.close(this.selectedMediaData);
  }

  reset() {
    this.emitEventToChild()
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}
