import { AdminState } from '@context/adminContext';
import { useEffect } from 'react';

const UseAdminAuth = () => {
  const {
    adminState: { isInitialzed },
    adminDispatch,
  } = AdminState();

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');

    if (storedAuth && !isInitialzed) {
      adminDispatch({
        type: 'SET_ADMIN_AUTH',
        payload: {
          isAdminAuthenticated: true,
          authenticatedAdmin: JSON.parse(storedAuth),
        },
      });
      adminDispatch({
        type: 'SET_INITIALIZED',
        payload: true,
      });
    }
  }, [adminDispatch, isInitialzed]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adminLogin = (token: any) => {
    localStorage.setItem('adminAuth', JSON.stringify(token));
    adminDispatch({
      type: 'SET_ADMIN_AUTH',
      payload: {
        isAdminAuthenticated: true,
        authenticatedAdmin: token,
      },
    });
  };

  const adminLogout = () => {
    localStorage.removeItem('adminAuth');
    adminDispatch({
      type: 'CLEAR_ADMIN_AUTH',
    });
    adminDispatch({
      type: 'SET_INITIALIZED',
      payload: false,
    });
  };

  return { adminLogin, adminLogout };
};

export default UseAdminAuth;
