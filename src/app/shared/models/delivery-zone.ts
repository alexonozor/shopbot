
export interface DeliveryZone {
    _id: string;
    country: string;
    image: string;
    countryCode: string;
    currency: string;
    currencyCode: string;
    states: [
        {
            name: string;
            localities: [{
                name: string;
                latitude: string;
                longitude: string;
                enabled: boolean;
            }]
        }

    ];
    enabled: boolean;
    createdAt: string;
}