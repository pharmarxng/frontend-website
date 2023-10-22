import { createContext, useContext, useReducer } from 'react';
import { IContextProps } from '../utils/interfaces';
import { alertReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertContext = createContext({} as any);

const AlertContextProvider = ({ children }: IContextProps) => {
  const [alertState, alertDispatch] = useReducer(alertReducer, {
    type: '',
    message: '',
    show: false,
  });

  return (
    <AlertContext.Provider value={{ alertState, alertDispatch }}>
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContextProvider;

export const AlertState = () => {
  return useContext(AlertContext);
};
