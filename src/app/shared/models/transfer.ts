import { Bank } from './bank';
import { Order } from './order';
import { User } from './user';
import { Store } from './store';

export interface Transfer {
    _id:string;
    id:string;
    account_number: string | undefined;
    bank_name: string;
    bank_code: string;
    fullname: string | undefined;
    created_at: string;
    currency: string;
    debit_currency: string;
    amount: number;
    fee: number;
    status: string;
    reference: string;
    meta: {
      store: Store;
      customer: User;
      account: Bank;
      bank: Bank;
      transactionType: string;
    },
    narration: string;
    approver: string;
    complete_message: string;
    requires_approval: number;
    is_approved: number,
    createdAt: string;
}