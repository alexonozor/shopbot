export interface EmailTemplate {
  _id: string;
  name: string;
  design: any;
  html?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEmailTemplateRequest {
  name: string;
  design: any;
  html?: string;
}

export interface UpdateEmailTemplateRequest {
  name?: string;
  design?: any;
  html?: string;
}

export interface SendEmailRequest {
  to?: string;
  subject: string;
  html: string;
  data: Record<string, any>;
  countries?: string[];
  type: 'User' | 'Merchant' | 'Riders' | 'All';
}
