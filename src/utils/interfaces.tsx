export interface ILink {
  path: string;
  text: string;
}

export interface IContextProps {
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
  image: string;
  description: string;
  inStock?: boolean;
  fastDelivery?: boolean;
  rating: number;
  categoryId?: string;
  qty?: number;
  reviews?: string[];
  noOfUnitsAvailable: number;
  noOfUnitsToPurchase?: number;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
  image: string;
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
  payload: string;
};

type ToggleProductCheckAction = {
  type: 'TOGGLE_PRODUCT_CHECK';
  payload: string;
};

type ToggleCheckAllAction = {
  type: 'TOGGLE_PRODUCT_CHECK_ALL';
};

export type CartActionType =
  | AddAction
  | RemoveAction
  | IncreasePurchaseableUnitsAction
  | ReducePurchaseableUnitsAction
  | ToggleCheckAllAction
  | ToggleProductCheckAction;

export type CartStateType = {
  cart: IProducts[];
  checkedItems: string[];
};

export type ProductStateType = {
  products: IProducts[];
  trendingProducts: IProducts[];
  searchQuery: string;
  product?: IProducts;
  pagination?: unknown;
  categories?: ICategory[];
  category?: ICategory;
  sort?: string;
  // byStock: boolean;
  // byRating: number;
};

type GetProductsAction = {
  type: 'GET_PRODUCTS';
  payload: {
    docs: IProducts[];
    totalDocs: number;
    limit: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    page?: number | undefined;
    totalPages: number;
    offset: number;
    prevPage?: number | null | undefined;
    nextPage?: number | null | undefined;
    pagingCounter: number;
    // meta?: any;
  };
};

type GetSingleProductAction = {
  type: 'GET_SINGLE_PRODUCT';
  payload: IProducts;
};

type SearchFilterAction = {
  type: 'FILTER_BY_SEARCH';
  payload: string;
};

type ClearFilterAction = {
  type: 'CLEAR_FILTERS';
};

type ClearSortAction = {
  type: 'CLEAR_SORT';
};

type GetCategoriesAction = {
  type: 'GET_CATEGORIES';
  payload: ICategory[];
};

type GetSingleCategoryAction = {
  type: 'GET_SINGLE_CATEGORY';
  payload: ICategory;
};

type GetTrendingProductsAction = {
  type: 'GET_TRENDING_PRODUCTS';
  payload: IProducts[];
};

type SortAction = {
  type: 'SORT_ALPHABETICALLY';
  payload: string;
};

type ReducePurchaseableUnitsAction = {
  type: 'REDUCE_PURCHASEABLE_UNIT';
  payload: string;
};

type IncreasePurchaseableUnitsAction = {
  type: 'INCREASE_PURCHASEABLE_UNIT';
  payload: string;
};

export type ProductActionType =
  | SortAction
  | ClearSortAction
  | ClearFilterAction
  | SearchFilterAction
  | GetProductsAction
  | GetSingleProductAction
  | GetCategoriesAction
  | GetSingleCategoryAction
  | GetTrendingProductsAction
  | IncreasePurchaseableUnitsAction
  | ReducePurchaseableUnitsAction;
// | StockFilterAction
// | DeliveryFilterAction
// | RatingFilterAction;

type AlertSuccessType = {
  type: 'ALERT_SUCCESS';
  payload: string;
};

type AlertErrorType = {
  type: 'ALERT_ERROR';
  payload: string;
};

type AlertClearType = {
  type: 'ALERT_CLEAR';
};

type AlertInfoType = {
  type: 'ALERT_INFO';
  payload: string;
};

type AlertWarningType = {
  type: 'ALERT_WARNING';
  payload: string;
};

export type AlertActionType =
  | AlertSuccessType
  | AlertErrorType
  | AlertClearType
  | AlertInfoType
  | AlertWarningType;

export type AlertStateType = {
  type: string;
  message: string;
  show: boolean;
};
