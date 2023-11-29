export interface ILink {
  path: string;
  text: string;
  icon?: string;
}

export interface IShipping {
  location: string;
  price: number;
  id: string;
}

export interface IOrderProducts {
  productId: string;
  quantity: number;
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
  price: number;
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
type SetShippingAction = {
  type: 'SET_SHIPPING';
  payload: IShipping;
};

export type CartActionType =
  | AddAction
  | RemoveAction
  | IncreasePurchaseableUnitsAction
  | ReducePurchaseableUnitsAction
  | ToggleCheckAllAction
  | ToggleProductCheckAction
  | SetShippingAction;

export type CartStateType = {
  cart: IProducts[];
  checkedItems: string[];
  shipping?: IShipping;
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
  recentlyViewed: IProducts[];
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

type setRecentlyViewedProductsAction = {
  type: 'SET_RECENT_PRODUCTS';
  payload: IProducts;
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
  | ReducePurchaseableUnitsAction
  | setRecentlyViewedProductsAction;
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

type SetEmailAction = {
  type: 'SET_EMAIL';
  payload: string;
};

type SetDeliveryTypeAction = {
  type: 'SET_DELIVERY_TYPE';
  payload: 'pickup' | 'delivery';
};

type SetDeliveryFeeAction = {
  type: 'SET_DELIVERY_FEE';
  payload: string;
};

type SetFirstNameAction = {
  type: 'SET_FIRST_NAME';
  payload: string;
};

type SetLastNameAction = {
  type: 'SET_LAST_NAME';
  payload: string;
};

type SetAddressAction = {
  type: 'SET_ADDRESS';
  payload: string;
};

type SetCityAction = {
  type: 'SET_CITY';
  payload: string;
};

type SetPhoneAction = {
  type: 'SET_PHONE';
  payload: string;
};

type SetPostalCodeAction = {
  type: 'SET_POSTAL_CODE';
  payload: string;
};

type SetDiscountCodeAction = {
  type: 'SET_DISCOUNT_CODE';
  payload: string;
};

export type OrderActionType =
  | SetEmailAction
  | SetDeliveryTypeAction
  | SetDeliveryFeeAction
  | SetFirstNameAction
  | SetLastNameAction
  | SetAddressAction
  | SetCityAction
  | SetPhoneAction
  | SetPostalCodeAction
  | SetDiscountCodeAction;

export type OrderStateType = {
  email?: string;
  deliveryType?: 'pickup' | 'delivery';
  deliveryFee?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  phone?: string;
  postalCode?: string;
  discountCode?: string;
};
