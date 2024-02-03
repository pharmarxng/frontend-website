import { IAuthenticatedUser } from '@utils/interfaces';
import { useState, useEffect } from 'react';

const useUserAuth = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState<boolean>(false);
  const [authenticatedUser, setAuthenticatedAdmin] =
    useState<IAuthenticatedUser | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setIsUserAuthenticated(true);
      setAuthenticatedAdmin(JSON.parse(storedAuth));
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userLogin = (token: any) => {
    localStorage.setItem('auth', JSON.stringify(token));
    setIsUserAuthenticated(true);
  };

  const userLogout = () => {
    localStorage.removeItem('auth');
    setIsUserAuthenticated(false);
  };

  return { isUserAuthenticated, authenticatedUser, userLogin, userLogout };
};

export default useUserAuth;
