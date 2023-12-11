import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Banner } from 'src/app/shared/models/banner';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Merchant } from 'src/app/shared/models/merchant';
import { BannersService } from 'src/app/shared/services/banners.service';

@Component({
  selector: 'app-list-banners',
  templateUrl: './list-banners.component.html',
  styleUrls: ['./list-banners.component.scss']
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



