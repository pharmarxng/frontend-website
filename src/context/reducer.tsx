import {
  CartStateType,
  CartActionType,
  IProducts,
  ProductActionType,
  ProductStateType,
  AlertActionType,
  AlertStateType,
} from '../utils/interfaces';

export const cartReducer = (
  state: CartStateType,
  action: CartActionType
): CartStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c: IProducts) => c.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c: IProducts) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (
  state: ProductStateType,
  action: ProductActionType
): ProductStateType => {
  switch (action.type) {
    // case 'SORT_BY_PRICE':
    //   return { ...state, sort: action.payload };
    // case 'FILTER_BY_STOCK':
    //   return { ...state, byStock: !state.byStock };
    // case 'FILTER_BY_DELIVERY':
    //   return { ...state, byFastDelivery: !state.byFastDelivery };
    // case 'FILTER_BY_RATING':
    //   return { ...state, byRating: action.payload };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        searchQuery: '',
        // byStock: false,
        // byFastDelivery: false,
        // byRating: 0,
      };
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload?.docs,
        pagination: {
          hasNextPage: action.payload?.hasNextPage,
          hasPrevPage: action.payload?.hasPrevPage,
          limit: action.payload?.limit,
          nextPage: action.payload?.nextPage,
          page: action.payload?.page,
          pagingCounter: action.payload?.pagingCounter,
          prevPage: action.payload?.prevPage,
          totalDocs: action.payload?.totalDocs,
          totalPages: action.payload?.totalPages,
        },
      };
    case 'GET_SINGLE_PRODUCT':
      return { ...state, product: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'GET_SINGLE_CATEGORY':
      return { ...state, category: action.payload };
    case 'GET_TRENDING_PRODUCTS':
      return { ...state, trendingProducts: action.payload };
    default:
      return state;
  }
};

export const alertReducer = (
  state: AlertStateType,
  action: AlertActionType
): AlertStateType => {
  switch (action.type) {
    case 'ALERT_SUCCESS' || 'ALERT_ERROR' || 'ALERT_INFO' || 'ALERT_WARNING':
      return {
        ...state,
        type: action.type,
        message: action.payload,
        show: true,
      };
    case 'ALERT_CLEAR':
      return { ...state, type: action.type, show: false };
    default:
      return state;
  }
};
