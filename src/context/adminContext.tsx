import { IContextProps } from '@utils/interfaces';
import { createContext, useContext, useReducer } from 'react';
import { adminReducer } from './reducer';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AdminContext = createContext({} as any);

const AdminContextProvider = ({ children }: IContextProps) => {
  const [adminState, adminDispatch] = useReducer(adminReducer, {
    authenticatedAdmin: null,
    adminToken: localStorage.getItem('adminAuth') || '',
    orders: [],
    searchQuery: '',
  });
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adminLogin = (token: any) => {
    localStorage.setItem('adminAuth', JSON.stringify(token));
    adminDispatch({
      type: 'SET_ADMIN_AUTH',
      payload: {
        adminToken: token.accessToken,
        authenticatedAdmin: token,
      },
    });
  };

  const adminLogout = () => {
    localStorage.removeItem('adminAuth');
    adminDispatch({
      type: 'CLEAR_ADMIN_AUTH',
    });
    navigate('/admin-login');
  };

  return (
    <AdminContext.Provider
      value={{ adminState, adminDispatch, adminLogin, adminLogout }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;

export const AdminState = () => {
  return useContext(AdminContext);
};
