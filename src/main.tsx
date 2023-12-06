import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Context from './context/productContext.tsx';
import AlertContext from './context/alertContext.tsx';
import CartContext from './context/cartContext.tsx';
import OrderContext from './context/orderContext.tsx';
import AuthContext from './context/authContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context>
    <AlertContext>
      <CartContext>
        <OrderContext>
          <AuthContext>
            <App />
          </AuthContext>
        </OrderContext>
      </CartContext>
    </AlertContext>
  </Context>
);
