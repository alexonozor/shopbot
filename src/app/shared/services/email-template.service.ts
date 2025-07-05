import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EmailTemplate, CreateEmailTemplateRequest, UpdateEmailTemplateRequest, SendEmailRequest } from '../models/email-template';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplateService {
  private apiUrl = `${environment.hostServer}/email-templates`;

  constructor(private http: HttpClient) {}

  createEmailTemplate(template: CreateEmailTemplateRequest): Observable<EmailTemplate> {
    return this.http.post<EmailTemplate>(this.apiUrl, template);
  }

  getEmailTemplates(): Observable<EmailTemplate[]> {
    return this.http.get<EmailTemplate[]>(this.apiUrl);
  }

  getEmailTemplate(id: string): Observable<EmailTemplate> {
    return this.http.get<EmailTemplate>(`${this.apiUrl}/${id}`);
  }

  updateEmailTemplate(id: string, template: UpdateEmailTemplateRequest): Observable<EmailTemplate> {
    return this.http.put<EmailTemplate>(`${this.apiUrl}/${id}`, template);
  }

  deleteEmailTemplate(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  sendEmail(payload: SendEmailRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, payload);
  }
}
