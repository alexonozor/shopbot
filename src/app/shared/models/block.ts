export interface Block {
    _id: string;
    title: string;
    active: boolean;

    type: string;

    content: string;

    useAggrregateQuery: boolean;

    query: string;

    country: string;

    states: string;
    
    metaQuery: {
        params: string;
        controls: string;
        url: string;
    };

    orientation: string;

    location: {
        type:string;
        coordinates: {
            type: number[],
          };
    };

}