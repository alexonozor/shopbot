import { Product } from './product';

export interface Menu {
    _id:string;
    name: string;
    items: number;
    activate: boolean;
    store: string;
    foods: Product[],
    position: number
}
