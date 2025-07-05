import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmailEditorComponent, EmailEditorModule } from 'angular-email-editor';
import { EmailTemplate } from 'src/app/shared/models/email-template';
import { EmailTemplateService } from 'src/app/shared/services/email-template.service';
import { SendEmailModalComponent } from 'src/app/shared/components/send-email-modal/send-email-modal.component';
import * as sample from '../sample.json'; // Adjust the path as necessary
@Component({
  selector: 'app-create-email-template',
   imports: [
    CommonModule,
    EmailEditorModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatMenuModule,
    RouterModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  templateUrl: './create-email-template.component.html',
  styleUrl: './create-email-template.component.scss',
})
export class CreateEmailTemplateComponent implements OnInit {
  
  title = 'angular-email-editor';
  options: EmailEditorComponent['options'] = {
    version: 'latest',
    appearance: {
      theme: 'modern_dark',
    },
  };

  @ViewChild(EmailEditorComponent)
  private emailEditor!: EmailEditorComponent;

  templateId: string | null = null;
  currentTemplate: EmailTemplate | null = null;
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private emailTemplateService: EmailTemplateService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    
    // Check if we're in edit mode by looking for template ID in route
    this.templateId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.templateId;

    if (this.isEditMode && this.templateId) {
      this.loadTemplate(this.templateId);
    }
  }

  loadTemplate(id: string) {
    this.emailTemplateService.getEmailTemplate(id).subscribe({
      next: (template) => {
        this.currentTemplate = template;
        // If editor is already loaded, load the design
        if (this.emailEditor && this.emailEditor.editor) {
          this.emailEditor.loadDesign(template.design);
        }
      },
      error: (error) => {
        console.error('Error loading template:', error);
      }
    });
  }

  // called when the editor is created
  editorLoaded(s: any) {
    console.log('editorLoaded');
    // If we have a template to load and we're in edit mode, load it
    if (this.isEditMode && this.currentTemplate) {
      this.emailEditor.loadDesign(this.currentTemplate.design);
    }
    // For create mode, start with empty editor (no design loaded)
  }

  // called when the editor has finished loading
  editorReady(s: any) {
    console.log('editorReady');
  }

  backToList() {
    this.router.navigate(['./list'], { relativeTo: this.route });
  }

  sendEmail() {
    this.emailEditor.editor.exportHtml((data) => {
      const dialogRef = this.dialog.open(SendEmailModalComponent, {
        width: '600px',
        data: {
          html: data.html,
          templateName: this.currentTemplate?.name || 'New Template'
        },
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.emailTemplateService.sendEmail(result).subscribe({
            next: (response) => {
              console.log('Email sent successfully', response);
              alert('Email sent successfully!');
            },
            error: (error) => {
              console.error('Error sending email:', error);
              alert('Error sending email. Please try again.');
            }
          });
        }
      });
    });
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => {
      console.log('exportHtml', data);
      // Here you can save the template
      this.saveTemplate(data);
    });
  }

  saveTemplate(data: { design: any; html: string }) {
    if (this.isEditMode && this.templateId) {
      // Update existing template
      const updateData = {
        design: data.design,
        html: data.html
      };
      
      this.emailTemplateService.updateEmailTemplate(this.templateId, updateData).subscribe({
        next: (template) => {
          console.log('Template updated successfully', template);
          console.log('Template updated successfully', template);
          // this.router.navigate(['./list'], { relativeTo: this.route });
        },
        error: (error) => {
          console.error('Error updating template:', error);
          alert('Error updating template. Please try again.');
        }
      });
    } else {
      // Create new template
      const templateName = prompt('Enter template name:');
      if (templateName) {
        const newTemplate = {
          name: templateName,
          design: data.design,
          html: data.html
        };

        this.emailTemplateService.createEmailTemplate(newTemplate).subscribe({
          next: (template) => {
            console.log('Template created successfully', template);
            // this.router.navigate(['./list'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error creating template:', error);
            alert('Error creating template. Please try again.');
          }
        });
      }
    }
  }
}
