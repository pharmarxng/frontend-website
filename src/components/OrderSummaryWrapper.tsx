import { ReactNode } from 'react';
import OrderSummaryCard from './OrderSummaryCard';
import { CartState } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path-constant';

interface OrderSummaryWrapperProps {
  children?: ReactNode;
  plain?: boolean;
}

const OrderSummaryWrapper = ({ children, plain }: OrderSummaryWrapperProps) => {
  const {
    cartState: { cart },
  } = CartState();
  const navigate = useNavigate();

  if (!cart.length) {
    navigate(`${PATH.CART}`);
  }

  return (
    <div className="md:flex md:flex-row-reverse  text-black md:mt-14">
      <div className="md:w-1/3 md:ml-10">
        <OrderSummaryCard />
      </div>
      <div
        className={`md:w-2/3 ${plain ? '' : 'border rounded-2xl px-4 pb-8'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default OrderSummaryWrapper;
