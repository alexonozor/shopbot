import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { Promo } from 'src/app/shared/models/promo';
import { PromosService } from 'src/app/shared/services/promo.service';

@Component({
  selector: 'app-list-promos',
  templateUrl: './list-promos.component.html',
  styleUrls: ['./list-promos.component.scss'],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class ListPromosComponent implements OnInit {
  public displayedColumns: string[] = [
    'select',
    'no',
    'codeName',
    'code',
    'startTime',
    'endTime',
    'enabled',
    'actions',
  ];
  public dataSource = new MatTableDataSource<Promo>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<any>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;

  constructor(
    private route: ActivatedRoute,
    private promoService: PromosService,
    private _matDialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Promo>(
      this.route.snapshot.data['promos']
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  deleteSelected() {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false,
    });
    this.confirmDialogRef.componentInstance.title = 'Delete promos?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete these promos?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selection.selected.forEach((promo: Promo, i: number) => {
          this.dataSource.data.splice(i, 1);
          this.dataSource = new MatTableDataSource<Promo>(this.dataSource.data);
          this.dataSource._updateChangeSubscription();
          this.dataSource.paginator = this.paginator;
          this.promoService.deletePromo(promo._id).subscribe();
        });
      }
    });
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  deletePromo(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false,
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Customer?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete this promo?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Promo>(this.dataSource.data);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
        this.promoService.deletePromo(id).subscribe();
      }
    });
  }

  update(promoId: string, event: MatSlideToggleChange) {
    this.promoService
      .updatePromo(promoId, { enabled: event.checked })
      .subscribe((data) => {});
  }
}
