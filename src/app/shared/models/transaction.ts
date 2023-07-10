import { Bank } from './bank';
import { Order } from './order';
import { User } from './user';
import { Store } from './store';

export interface Transaction {
    _id:string;
    orders: Order[];
    store: Store;
    customer: User;
    account: Bank;
    totalAmount:number;
    status: string;
    reference: string;
    callback_url: string;
    createdAt: string;
}
    