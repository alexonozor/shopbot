import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Rider } from 'src/app/shared/models/rider';
import { RidersService } from '../../../shared/services/rider.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-list-rider',
  templateUrl: './list-riders.component.html',
  styleUrls: ['./list-riders.component.scss']
})
export class ListRiderComponent implements OnInit {

 
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;
  riders: Rider[]

  constructor(
    private route: ActivatedRoute,
    private riderService: RidersService,
    private _matDialog: MatDialog
  ) {
    this.riders = this.route.snapshot.data['riders'] as Rider[]
   }

  ngOnInit(): void {}

  onChange(store: Rider, event: MatSlideToggleChange) {
    this.riderService.updateRider(store._id, {activate: event.checked }).subscribe(() => {})
  }

  banRider(store: Rider, event: MatSlideToggleChange) {
    this.riderService.updateRider(store._id, {ban: event.checked }).subscribe(() => {})
  }

  
  deleteRider(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false
    });
    this.confirmDialogRef.componentInstance.title = 'Delete rider?';
    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete this rider?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.riders.splice(index, 1);
        this.riderService.deleteRider(id).subscribe();
      }
    });
   
  }

}
