import { createContext, useContext, useReducer } from 'react';
import { IContextProps } from '../utils/interfaces';
import { productReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductContext = createContext({} as any);

const ProductContextProvider = ({ children }: IContextProps) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
    trendingProducts: [],
    pagination: {},
    searchQuery: '',
    categories: [],
    sort: 'Alphabetically, A-Z',
    recentlyViewed: [],
  });

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;

export const ProductState = () => {
  return useContext(ProductContext);
};
