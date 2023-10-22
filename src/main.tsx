import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Context from './context/productContext.tsx';
import AlertContext from './context/alertContext.tsx';
import CartContext from './context/cartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <AlertContext>
        <CartContext>
          <App />
        </CartContext>
      </AlertContext>
    </Context>
  </React.StrictMode>
);
