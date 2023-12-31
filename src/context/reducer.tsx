import {
  CartStateType,
  CartActionType,
  IProducts,
  ProductActionType,
  ProductStateType,
  AlertActionType,
  AlertStateType,
  OrderStateType,
  OrderActionType,
  AuthActionType,
  AuthStateType,
  IOrderDeliveryFees,
} from '../utils/interfaces';

export const authReducer = (
  state: AuthStateType,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case 'SET_REDIRECT_PATH': {
      return { ...state, redirectTo: action.payload };
    }
    case 'CLEAR_REDIRECT_PATH': {
      return { ...state, redirectTo: null };
    }
    default:
      return state;
  }
};

export const orderReducer = (
  state: OrderStateType,
  action: OrderActionType
): OrderStateType => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };

    case 'SET_DELIVERY_TYPE':
      return { ...state, deliveryType: action.payload };

    case 'SET_FIRST_NAME':
      return { ...state, firstName: action.payload };

    case 'SET_LAST_NAME':
      return { ...state, lastName: action.payload };

    case 'SET_ADDRESS':
      return { ...state, address: action.payload };

    case 'SET_CITY':
      return { ...state, city: action.payload };

    case 'SET_PHONE':
      return { ...state, phone: action.payload };

    case 'SET_POSTAL_CODE':
      return { ...state, postalCode: action.payload };

    case 'SET_DISCOUNT_CODE':
      return { ...state, discountCode: action.payload };

    case 'GET_ORDERS': {
      return {
        ...state,
        orders: action.payload?.docs,
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
    }

    case 'GET_SINGLE_ORDER': {
      return {
        ...state,
        order: { ...action.payload },
      };
    }

    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
};

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
    case 'CHECK_ALL_PRODUCTS': {
      const { cart } = state;
      let updatedCheckItem: string[] = [];
      updatedCheckItem = cart.map((cartItem) => {
        return cartItem.id;
      });
      return { ...state, checkedItems: updatedCheckItem };
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
    case 'SET_SHIPPING': {
      const { shipping } = state;
      let updatedShipping: IOrderDeliveryFees | undefined = undefined;
      if (!shipping) {
        updatedShipping = action.payload;
      } else if (shipping.id !== action.payload.id) {
        updatedShipping = action.payload;
      }
      return { ...state, shipping: updatedShipping };
    }
    case 'SET_SHIPPING_LIST': {
      return { ...state, shippingList: action.payload };
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
    default:
      return state;
  }
};

export const alertReducer = (
  state: AlertStateType,
  action: AlertActionType
): AlertStateType => {
  switch (action.type) {
    case 'ALERT_SUCCESS':
    case 'ALERT_ERROR':
    case 'ALERT_INFO':
    case 'ALERT_WARNING':
      return {
        ...state,
        type: action.type,
        message: action.payload,
        show: true,
      };
    case 'ALERT_CLEAR':
      return { ...state, type: '', show: false, message: '' };
    default:
      return state;
  }
};
