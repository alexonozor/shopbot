import { Menu } from "./menu";
import { Store } from './store';
import { Product } from './product';

export interface Offer {
    _id:string;
    menu: Menu;
    store: Store;
    food: Product;
    image: string;
    description: string;
    discount: number;
    startTime: string;
    endTime: string;
    offerPeriodType: string;
    offerType: string;
    applicableType: number;
    quantityForFree: number,
    quantityToOrder: number,
    qtq: number;
    offerPeriodDays: any[];
    enabled: boolean;
    amount: number;
}
  