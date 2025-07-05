import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { EmailTemplate } from 'src/app/shared/models/email-template';
import { EmailTemplateService } from 'src/app/shared/services/email-template.service';

@Component({
  selector: 'app-list-email-templates',
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './list-email-templates.component.html',
  styleUrl: './list-email-templates.component.scss',
})
export class ListEmailTemplatesComponent implements OnInit {
  public displayedColumns: string[] = [
    'select',
    'no',
    'name',
    'createdAt',
    'updatedAt',
    'actions',
  ];
  public dataSource = new MatTableDataSource<EmailTemplate>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selection = new SelectionModel<EmailTemplate>(true, []);
  confirmDialogRef!: MatDialogRef<ConfirmComponent>;

  constructor(
    private emailTemplateService: EmailTemplateService,
    private _matDialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    // Load email templates
    this.loadEmailTemplates();
  }

  loadEmailTemplates() {
    this.emailTemplateService.getEmailTemplates().subscribe({
      next: (templates) => {
        this.dataSource.data = templates;
      },
      error: (error) => {
        console.error('Error loading email templates:', error);
      }
    });
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
    this.confirmDialogRef.componentInstance.title = 'Delete email templates?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete these email templates?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const templatesToDelete = [...this.selection.selected];
        templatesToDelete.forEach((template: EmailTemplate) => {
          this.emailTemplateService.deleteEmailTemplate(template._id).subscribe({
            next: () => {
              const index = this.dataSource.data.findIndex(t => t._id === template._id);
              if (index > -1) {
                this.dataSource.data.splice(index, 1);
                this.dataSource._updateChangeSubscription();
              }
            },
            error: (error) => {
              console.error('Error deleting template:', error);
            }
          });
        });
        this.selection.clear();
      }
    });
  }

  checkboxLabel(row?: EmailTemplate): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} template`;
  }

  deleteTemplate(id: string, index: number) {
    this.confirmDialogRef = this._matDialog.open(ConfirmComponent, {
      disableClose: false,
    });
    this.confirmDialogRef.componentInstance.title = 'Delete Email Template?';
    this.confirmDialogRef.componentInstance.confirmMessage =
      'Are you sure you want to delete this email template?';
    this.confirmDialogRef.componentInstance.confirmButton = 'Delete';
    this.confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.emailTemplateService.deleteEmailTemplate(id).subscribe({
          next: () => {
            this.dataSource.data.splice(index, 1);
            this.dataSource._updateChangeSubscription();
            this.dataSource.paginator = this.paginator;
          },
          error: (error) => {
            console.error('Error deleting template:', error);
          }
        });
      }
    });
  }
}
