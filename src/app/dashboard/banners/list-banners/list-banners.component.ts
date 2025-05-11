import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Banner } from 'src/app/shared/models/banner';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Merchant } from 'src/app/shared/models/merchant';
import { BannersService } from 'src/app/shared/services/banners.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SelectMediaComponent } from 'src/app/shared/components/select-media/select-media.component';

@Component({
  selector: 'app-list-banners',
  templateUrl: './list-banners.component.html',
  styleUrls: ['./list-banners.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListBannersComponent implements OnInit {
  displayedColumns = ['name', 'description', 'active', 'action'];
  public banners: Banner[] = [];
  confirmDialogRef!: MatDialogRef<ConfirmComponent> | null;


  constructor(
    private bannersService: BannersService,
    public _matDialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.banners = this.route.snapshot.data['banners'] as Banner[]
   }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
  }

  delete(index: number, id: any) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Banner?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this banner?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.banners.splice(index, 1)
        this.bannersService.deleteBanner(id).subscribe()
      }
      this.confirmDialogRef = null;
    });
  }




  onChange(banner: Banner, event: MatSlideToggleChange) {
    this.bannersService.updateBanner(banner._id, {active: event.checked }).subscribe(() => {
      this._matDialog
    })
  }

  public viewDetails(banner: Banner) {
    this.router.navigate(['dashboard', 'banners', banner._id, 'edit']);
  }


  addBanner() {
    this.router.navigate(['dashboard', 'banners', 'new']);
  }


}



