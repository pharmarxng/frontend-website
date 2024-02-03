import { AdminState } from '@context/adminContext';
import { useEffect } from 'react';

const useAdminAuth = () => {
  const {
    adminState: { isAdminAuthenticated, authenticatedAdmin },
    adminDispatch,
  } = AdminState();

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    console.log('It is in the useEffect in the hook');
    console.log({ storedAuth });

    if (storedAuth) {
      console.log('After storedAuth ');
      adminDispatch({
        type: 'SET_ADMIN_AUTH',
        payload: {
          isAdminAuthenticated: true,
          authenticatedAdmin: JSON.parse(storedAuth),
        },
      });

      console.log({ isAdminAuthenticated });
    }
  }, [adminDispatch, isAdminAuthenticated]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const adminLogin = (token: any) => {
    localStorage.setItem('adminAuth', JSON.stringify(token));
    console.log('It got into the login function');
    adminDispatch({
      type: 'SET_ADMIN_AUTH',
      payload: {
        isAdminAuthenticated: true,
        authenticatedAdmin: token,
      },
    });
    console.log({ isAdminAuthenticated });
  };

  const adminLogout = () => {
    localStorage.removeItem('adminAuth');
    adminDispatch({
      type: 'CLEAR_ADMIN_AUTH',
    });
  };

  return { isAdminAuthenticated, authenticatedAdmin, adminLogin, adminLogout };
};

export default useAdminAuth;
