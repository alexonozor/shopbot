import { Store } from './store';
import { User } from './user';

export interface Order  {
    _id:string;
    cart: any;
    store: Store;
    shipping: Shipping;
    user: User,
    status: Status[];
    reference: string;
    total: number;
    discount: number;
    serviceFee: number;
    orderInstruction: string;
    tax: string;
    note: string;
    createdAt: string;
    shippingFee: number;
    paymentStatus: string;
    payment:string;
    category: string;
    gift: boolean;
    orderType: string;
    receiver: Receiver;
    vendorCommission: number;
}


export interface Receiver  {
    "address": {
        "name": string;
        "latitude": number;
        "longitude": number;
        "country": string;
        "locality": string;
        "postalCode": string;
        "administrativeArea": string;
        "subLocality": string;
        "subThoroughfare": string;
        "thoroughfare": string;
        "label": string;
        "dropOfOption": string;
        "driversInstruction": string;
    };
    "name": string;
    "phoneNumber": string;
    "note": string;
    "surprise": boolean;
}


export interface Shipping {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    isoCountryCode: string;
    locality: string;
    postalCode: string;
    administrativeArea: string;
    subAdministrativeArea: string;
    subLocality: string;
    subThoroughfare: string;
    thoroughfare: string;
    paymentStatus: string;
    category: string;
  }

  export interface Status {
        id: number; 
        name: string;
        color: string; 
        updatedOn: { 
            type: Date, 
            default: Date 
        } | any;
  }



