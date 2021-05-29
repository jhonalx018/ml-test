export interface IEPrice {
  currency: string;
  amount: string;
  decimals: string,
}
export interface IEItemsSearchResult {
  id: string;
  title: string;
  price: IEPrice;
  picture: string;
  condition: string;
  free_shipping: boolean
}

export interface IESearchListResult {
  author: Object;
  categories: string[];
  items: IEItemsSearchResult[]
}

export interface IEItem {
  id: string;
  title: string;
  price: IEPrice;
  picture : string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string,
  categories: string[]
}

export interface IEItemDetail {
  author: Object;
  item: IEItem
}
