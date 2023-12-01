import { Admin } from './admin';

export interface FundRequest {
      _id: string;
      requestedBy: Admin;
      category: string;
      status: string;
      items: {
        item: string;
        price: number;
        quantity: number;
        note: string;
      }[];
      total: number;
      currency: string;
      country: string;
      description: String;
}