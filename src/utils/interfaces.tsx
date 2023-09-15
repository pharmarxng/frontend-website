export interface ILink {
  path: string;
  text: string;
}

export interface IPharmContextProps {
  children?: React.ReactNode;
}

export interface IOnlinePharmacyCardProps {
  img: string;
  title: string;
  description: string;
}

export interface IProducts {
  id: string;
  name: string;
  price: string;
  img: string;
  title: string;
  description: string;
  inStock?: number;
  fastDelivery?: boolean;
  ratings: number;
  qty?: number;
}

export interface IQuestionaire {
  question: string;
  answer: string;
}

///// Types

type AddAction = {
  type: 'ADD_TO_CART';
  payload: IProducts;
};

type RemoveAction = {
  type: 'REMOVE_FROM_CART';
  payload: IProducts;
};

type ChangeQTYAction = {
  type: 'CHANGE_CART_QTY';
  payload: IProducts;
};

export type CartActionType = AddAction | RemoveAction | ChangeQTYAction;

export type CartStateType = {
  cart: IProducts[];
  products: IProducts[];
};

export type ProductStateType = {
  // byStock: boolean;
  // byRating: number;
  searchQuery: string;
  // sort?: string;
};

type SearchFilterAction = {
  type: 'FILTER_BY_SEARCH';
  payload: string;
};

type ClearFilterAction = {
  type: 'CLEAR_FILTERS';
};

export type ProductActionType =
  // | SortAction
  // | StockFilterAction
  // | DeliveryFilterAction
  // | RatingFilterAction
  SearchFilterAction | ClearFilterAction;
