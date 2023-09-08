import {
  CartStateType,
  CartActionType,
  IProducts,
  ProductActionType,
  ProductStateType,
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
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'CLEAR_FILTERS':
      return {
        // byStock: false,
        // byFastDelivery: false,
        // byRating: 0,
        searchQuery: '',
      };
    default:
      return state;
  }
};
