import { CartState } from '../context/cartContext';
import { IProducts } from '../utils/interfaces';
import BorderedWrappper from './BorderedWrappper';
import Button from './Button';
import NairaWrapper from './NairaWrapper';

const CheckoutCard = () => {
  const {
    cartState: { cart, checkedItems },
  } = CartState();

  const calculateSubTotal = () => {
    let subTotal = 0;
    cart.map((cartItem: IProducts) => {
      if (checkedItems.includes(cartItem.id)) {
        subTotal += cartItem.price * cartItem.noOfUnitsToPurchase!;
      }
    });
    return subTotal;
  };

  const grandTotal = calculateSubTotal() + 0;

  return (
    <BorderedWrappper classDef="px-5 pt-5 pb-12 pb-8 md:px-8 text-base/5 md:text-xl/6 my-7 md:my-0">
      <div>
        <div className="flex justify-between pb-6 md:pb-9">
          <div>Subtotal</div>
          <NairaWrapper>{calculateSubTotal().toLocaleString()}</NairaWrapper>
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
        disabled={grandTotal <= 0}
        buttonStyle="bg-deepBlue-100 text-white"
      >
        Checkout Now
      </Button>
    </BorderedWrappper>
  );
};

export default CheckoutCard;
