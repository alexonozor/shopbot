import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Rider } from 'src/app/shared/models/rider';
import { RidersService } from '../../../shared/services/rider.service';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-list-rider',
  templateUrl: './list-riders.component.html',
  styleUrls: ['./list-riders.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
})
export class ListRiderComponent implements OnInit {
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  riders: Rider[];

  constructor(
    private route: ActivatedRoute,
    private riderService: RidersService,
    private _matDialog: MatDialog
  ) {
    this.riders = this.route.snapshot.data['riders'] as Rider[];
  }

  ngOnInit(): void {}

  onChange(store: Rider, event: MatSlideToggleChange) {
    this.riderService
      .updateRider(store._id, { activate: event.checked })
      .subscribe(() => {});
  }

  banRider(store: Rider, event: MatSlideToggleChange) {
    this.riderService
      .updateRider(store._id, { ban: event.checked })
      .subscribe(() => {});
  }

  deleteRider(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false,
    });
    this.confirmDialogRef.componentInstance.title = 'Delete rider?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete this rider?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.riders.splice(index, 1);
        this.riderService.deleteRider(id).subscribe();
      }
    });
  }
}
