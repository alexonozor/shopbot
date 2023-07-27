
export interface DeliveryZone {
    _id:string;
    name: string;
    country: string;
    states: string[];
    localities: string[];
    enabled: boolean;
    localAreas: [{
        name: string;
        latitude: string;
        longitude: string;
    }];
    createdAt: string;
}