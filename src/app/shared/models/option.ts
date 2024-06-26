import { Store } from "./store";

export interface Option {
  _id: string;
  name: string;
  mandatory: boolean;
  selectedType: string;
  atLeast: string;
  atMost: string;
  enabled: boolean;
  inStock: boolean;
  store: Store,
  price: number,
  optionGroup: any
  options: any
}
 
