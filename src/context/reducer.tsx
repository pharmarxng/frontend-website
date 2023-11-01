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
    case 'ADD_TO_CART': {
      const { cart } = state;
      let updatedCart = [...cart];
      const foundIndex = cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (foundIndex !== -1) {
        updatedCart[foundIndex] = action.payload;
      } else {
        updatedCart = [...updatedCart, { ...action.payload }];
      }
      return { ...state, cart: updatedCart };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c: IProducts) => c.id !== action.payload),
      };
    case 'INCREASE_PURCHASEABLE_UNIT': {
      const { cart } = state;

      const updatedCart = cart.map((product) => {
        const sumTotal =
          product!.noOfUnitsAvailable + product!.noOfUnitsToPurchase!;
        if (product.id === action.payload) {
          const noOfUnitsAvailable = Math.max(
            0,
            product.noOfUnitsAvailable - 1
          );
          const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;

          return {
            ...product,
            inStock: noOfUnitsAvailable >= 1,
            noOfUnitsAvailable: noOfUnitsAvailable,
            noOfUnitsToPurchase: noOfUnitsToPurchase,
          };
        }
        return product;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'REDUCE_PURCHASEABLE_UNIT': {
      const { cart } = state;

      const updatedCart = cart.map((product) => {
        if (product.id === action.payload) {
          const sumTotal =
            product!.noOfUnitsAvailable + product!.noOfUnitsToPurchase!;
          const noOfUnitsAvailable = Math.min(
            sumTotal,
            product.noOfUnitsAvailable + 1
          );
          const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;

          return {
            ...product,
            inStock: noOfUnitsAvailable >= 1,
            noOfUnitsAvailable: noOfUnitsAvailable,
            noOfUnitsToPurchase: noOfUnitsToPurchase,
          };
        }
        return product;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case 'TOGGLE_PRODUCT_CHECK': {
      const { checkedItems } = state;

      const updatedCheckItem = checkedItems.includes(action.payload)
        ? checkedItems.filter((id) => id !== action.payload)
        : [...checkedItems, action.payload];

      return {
        ...state,
        checkedItems: updatedCheckItem,
      };
    }
    case 'TOGGLE_PRODUCT_CHECK_ALL': {
      const { cart, checkedItems } = state;
      let updatedCheckItem: string[] = [];
      if (checkedItems.length === 0) {
        updatedCheckItem = cart.map((cartItem) => {
          return cartItem.id;
        });
      }
      return { ...state, checkedItems: updatedCheckItem };
    }
    default:
      return state;
  }
};

export const productReducer = (
  state: ProductStateType,
  action: ProductActionType
): ProductStateType => {
  switch (action.type) {
    case 'CLEAR_FILTERS':
      return {
        ...state,
        searchQuery: '',
        // byStock: false,
        // byFastDelivery: false,
        // byRating: 0,
      };
    case 'CLEAR_SORT':
      return { ...state, sort: 'Alphabetically, A-Z' };
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload?.docs.map((product) => {
          return { ...product, noOfUnitsToPurchase: 0 };
        }),
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
      return {
        ...state,
        product: { ...action.payload, noOfUnitsToPurchase: 0 },
      };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'GET_SINGLE_CATEGORY':
      return { ...state, category: action.payload };
    case 'GET_TRENDING_PRODUCTS':
      return { ...state, trendingProducts: action.payload };
    case 'SORT_ALPHABETICALLY':
      return { ...state, sort: action.payload };
    case 'INCREASE_PURCHASEABLE_UNIT': {
      const { products, product } = state;
      let updatedProduct;
      const sumTotal =
        product!.noOfUnitsAvailable + product!.noOfUnitsToPurchase!;

      const updatedProducts = products.map((product) => {
        if (product.id === action.payload) {
          const noOfUnitsAvailable = Math.max(
            0,
            product.noOfUnitsAvailable - 1
          );
          const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;

          return {
            ...product,
            inStock: noOfUnitsAvailable >= 1,
            noOfUnitsAvailable: noOfUnitsAvailable,
            noOfUnitsToPurchase: noOfUnitsToPurchase,
          };
        }
        return product;
      });

      if (product?.id === action.payload) {
        const noOfUnitsAvailable = Math.max(0, product.noOfUnitsAvailable - 1);
        const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;
        updatedProduct = {
          ...product,
          inStock: noOfUnitsAvailable >= 1,
          noOfUnitsAvailable: noOfUnitsAvailable,
          noOfUnitsToPurchase: noOfUnitsToPurchase,
        };
      }

      return {
        ...state,
        products: updatedProducts,
        product: updatedProduct,
      };
    }
    case 'REDUCE_PURCHASEABLE_UNIT': {
      const { products, product } = state;
      let updatedProduct;
      const sumTotal =
        product!.noOfUnitsAvailable + product!.noOfUnitsToPurchase!;

      const updatedProducts = products.map((product) => {
        if (product.id === action.payload) {
          const noOfUnitsAvailable = Math.min(
            sumTotal,
            product.noOfUnitsAvailable + 1
          );
          const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;

          return {
            ...product,
            inStock: noOfUnitsAvailable >= 1,
            noOfUnitsAvailable: noOfUnitsAvailable,
            noOfUnitsToPurchase: noOfUnitsToPurchase,
          };
        }
        return product;
      });

      if (product?.id === action.payload) {
        const noOfUnitsAvailable = Math.min(
          sumTotal,
          product.noOfUnitsAvailable + 1
        );
        const noOfUnitsToPurchase = sumTotal - noOfUnitsAvailable;

        updatedProduct = {
          ...product,
          inStock: noOfUnitsAvailable >= 1,
          noOfUnitsAvailable: noOfUnitsAvailable,
          noOfUnitsToPurchase: noOfUnitsToPurchase,
        };
      }

      return {
        ...state,
        products: updatedProducts,
        product: updatedProduct,
      };
    }
    case 'SET_RECENT_PRODUCTS': {
      const { recentlyViewed } = state;
      const updatedArrayOfRecentItems = [...recentlyViewed];
      const productIndex = updatedArrayOfRecentItems.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (productIndex === -1) {
        if (recentlyViewed.length === 4) {
          updatedArrayOfRecentItems.shift();
          updatedArrayOfRecentItems.push(action.payload);
        } else if (recentlyViewed.length < 4) {
          updatedArrayOfRecentItems.push(action.payload);
        }
      }

      return { ...state, recentlyViewed: updatedArrayOfRecentItems };
    }
    // case 'FILTER_BY_STOCK':
    //   return { ...state, byStock: !state.byStock };
    // case 'FILTER_BY_DELIVERY':X
    //   return { ...state, byFastDelivery: !state.byFastDelivery };
    // case 'FILTER_BY_RATING':
    //   return { ...state, byRating: action.payload };
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
