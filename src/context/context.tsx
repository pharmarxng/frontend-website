import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { IPharmContextProps, IProducts } from '../utils/interfaces';
import { cartReducer, productReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PharmContext = createContext({} as any);
faker.seed(99);

const Context = ({ children }: IPharmContextProps) => {
  const products: IProducts[] = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    img: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    // fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: '',
  });

  return (
    <PharmContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </PharmContext.Provider>
  );
};
export default Context;

export const PharmState = () => {
  return useContext(PharmContext);
};
