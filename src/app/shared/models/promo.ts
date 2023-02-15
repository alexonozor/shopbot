import { Store } from './store';
import { User } from './user';

export interface Promo {
    _id: string;
    image: string;
    codeName: string;
    code: string;
    vendors: Store[];
    customers: User[];
    showInCustomerApp: boolean;
    flatDiscount: boolean;
    flatDiscountAmount: number;
    discountType: number;
    startTime: Date;
    endTime: Date;
    redeemCount: number;
    promoCodeDescription: string;
    textCodeDescription: string;
    enabled: boolean;
    createdAt: Date;
    maximumDiscountAmount: number;
    minimumOrderAmount: number;
    discount: number;
}
