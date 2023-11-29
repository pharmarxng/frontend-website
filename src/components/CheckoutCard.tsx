import { useNavigate } from 'react-router-dom';
import { CartState } from '../context/cartContext';
import { IProducts } from '../utils/interfaces';
import BorderedWrappper from './BorderedWrappper';
import Button from './Button';
import NairaWrapper from './NairaWrapper';
import { PATH } from '../utils/path-constant';

const CheckoutCard = () => {
  const {
    cartState: { cart, checkedItems, shipping },
  } = CartState();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate(`${PATH.DELIVERY_INFO}`);
  };

  const calculateSubTotal = () => {
    let subTotal = 0;
    cart.map((cartItem: IProducts) => {
      if (checkedItems.includes(cartItem.id)) {
        subTotal += cartItem.price * cartItem.noOfUnitsToPurchase!;
      }
    });
    return subTotal;
  };

  const shippingFee = shipping ? shipping.price : 0;
  const grandTotal = calculateSubTotal() + shippingFee;

  return (
    <BorderedWrappper classDef="px-5 pt-5 pb-12 pb-8 md:px-8 text-base/5 md:text-xl/6 my-7 md:my-0">
      <div>
        <div className="flex justify-between pb-6 md:pb-9">
          <div>Subtotal</div>
          <NairaWrapper>{calculateSubTotal().toLocaleString()}</NairaWrapper>
        </div>
        <div className="flex justify-between pb-6 md:pb-9">
          <div>Shipping Fee</div>
          <NairaWrapper>{shipping ? shipping.price : 0}</NairaWrapper>
        </div>
        <div className="flex justify-between pb-6 md:pb-9 border-dashed border-b-2 border-[#CBD2E0]">
          <div>Discount</div>
          <NairaWrapper>0</NairaWrapper>
        </div>
        <div className="flex justify-between py-6 md:py-11 font-medium">
          <div>Grand Total</div>
          <NairaWrapper>{grandTotal}</NairaWrapper>
        </div>
      </div>
      <Button
        onclick={handleCheckoutClick}
        disabled={grandTotal <= 0}
        buttonStyle="bg-deepBlue-100 text-white"
      >
        Checkout Now
      </Button>
    </BorderedWrappper>
  );
};

export default CheckoutCard;
