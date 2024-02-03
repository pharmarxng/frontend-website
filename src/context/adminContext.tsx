import { IContextProps } from '@utils/interfaces';
import { createContext, useContext, useReducer } from 'react';
import { adminReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminContext = createContext({} as any);

const AdminContextProvider = ({ children }: IContextProps) => {
  const [adminState, adminDispatch] = useReducer(adminReducer, {});

  return (
    <AdminContext.Provider value={{ adminState, adminDispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;

export const AdminState = () => {
  return useContext(AdminContext);
};
