export interface Status {
    id: number;
    name: string;
    color: string;
    imageUrl: string | null,
    updatedOn: string | null | Date;
    title: string;
    description: string;
    eta: null | string;
    orderCancellationReason: string | null;
    vendorIssue?: boolean;
    icon?: string;
}

export interface StatusParams {
  orderId: string;
  userId: string;
  orderCancellationReason?: string | null;
  vendorIssue?: string | null,
  statusNumber: number; 
}


export const STATUS: Status[] = [
    {
      id: 5,
      name: "Delivered",
      color: "text-yellow-500 bg-primary/34",
      icon: 'local_post_office',
      imageUrl: null,
      updatedOn: new Date(),
      title: "The driver is on the\nway to you.",
      description: "The driver picked up your order and it is on\nthe way to you",
      eta: null,
      orderCancellationReason: null
    },
    {
      id: 4,
      name: "Shipped",
      color: "text-yellow-500 bg-primary/34",
      icon: "sports_motorsports",
      imageUrl: '"~/assets/delivery-shipped.jpg',
      updatedOn: new Date(),
      title: "The driver is on the\nway to you.",
      description: "The driver picked up your order and it is on\nthe way to you",
      eta:  null,
      orderCancellationReason: null
    },
    {
      id: 3,
      name: "Canceled",
      color: "text-danger",
      icon: 'block',
      imageUrl: null,
      updatedOn: new Date(),
      title: "Order canceled",
      description: "Your order has been canceled",
      eta: null,
      orderCancellationReason: null,
      vendorIssue: false
    },
   
    {
      id: 2,
      name: "Ready for Pickup",
      color: "text-primary bg-primary/34",
      icon: 'quick_reorder',
      imageUrl: "~/assets/delivery-pack.jpg",
      updatedOn: new Date(),
      title: "Food is ready. We are\nwaiting for the driver.",
      description: "The food is ready. The restaurant is\nwaiting for a driver to pick your order",
      eta: null,
      orderCancellationReason: null
    },
    {
      id: 1,
      name: "Accepted",
      color: "text-primary bg-primary/34",
      icon: 'preliminary',
      imageUrl: "~/assets/vendor-cooking.jpg",
      updatedOn: new Date(),
      title: "Order Confirmed. Chef\nstarted cooking.",
      description: "Sit back and relax\nyour food is been cooked right now.",
      eta: null,
      orderCancellationReason: null
    },
    {
      id: 0,
      name: "Pending",
      color: "text-secondary bg-secondary/34 bg-secondary",
      icon: 'orders',
      imageUrl: "~/assets/order-recived.jpg",
      updatedOn: new Date(),
      title: "Order Sent. The Staff\nwill see it very soon.",
      description: "You are in good hands now. Restaurant's\nstaff will start preparing your order.",
      eta: '5 mins',
      orderCancellationReason: null
    }
]

  export function getStatus(id: number): Status {
    return STATUS.find((status) => status.id === id)!;
  }

  export enum STATUS_ENUM {
    PENDING = 0,
    ACCEPTED = 1, // For testing
    READY_FOR_PICKUP = 2,
    CANCELED = 3,
    SHIPPED = 4,
    DELIVERED = 5
  }

  export enum ORDER_STATE {
    NEW = 'New',
    CANCEL = 'Cancel',
    COMPLETED = 'Complete', // For testing
    PROCESSING = 'Processing',
  }