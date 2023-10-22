import { createContext, useContext, useReducer } from 'react';
import { IContextProps } from '../utils/interfaces';
import { cartReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartContext = createContext({} as any);

const CartContextProvider = ({ children }: IContextProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

export const CartState = () => {
  return useContext(CartContext);
};
