import { createContext, useContext, useReducer } from 'react';
import { IContextProps } from '../utils/interfaces';
import { orderReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderContext = createContext({} as any);

const OrderContextProvider = ({ children }: IContextProps) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, {
    email: '',
    deliveryType: 'delivery',
    deliveryFee: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    postalCode: '',
    discountCode: '',
  });

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
export default OrderContextProvider;

export const OrderState = () => {
  return useContext(OrderContext);
};
