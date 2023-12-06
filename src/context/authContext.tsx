import { createContext, useContext, useReducer } from 'react';
import { IContextProps } from '../utils/interfaces';
import { authReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthContext = createContext({} as any);

const AuthContextProvider = ({ children }: IContextProps) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    redirectTo: null,
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const AuthState = () => {
  return useContext(AuthContext);
};
