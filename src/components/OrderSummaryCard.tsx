import { CartState } from '../context/cartContext';
import { IProducts } from '../utils/interfaces';
import BorderedWrappper from './BorderedWrappper';
import Input from './Input';
import NairaWrapper from './NairaWrapper';
import axios from '../axios/axios';
import { FormEvent, useState } from 'react';
import FormButton from './FormButton';

interface OrderSummaryCardProps {
  bare?: boolean;
}

const OrderSummaryCard = ({ bare }: OrderSummaryCardProps) => {
  const {
    cartState: { cart, checkedItems, shipping },
  } = CartState();
  const [discountCode, setdiscountCode] = useState<string>('');

  const calculateSubTotal = () => {
    let subTotal = 0;
    cart.map((cartItem: IProducts) => {
      if (checkedItems.includes(cartItem.id)) {
        subTotal += cartItem.price * cartItem.noOfUnitsToPurchase!;
      }
    });
    return subTotal;
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleGetDiscount();
  };

  const handleGetDiscount = () => {
    axios
      .get('/api/v1/order/get-discount-voucher', {
        params: {
          discountCode,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const shippingFee = shipping ? shipping.price : 0;
  const grandTotal = calculateSubTotal() + shippingFee;

  return (
    <BorderedWrappper classDef="px-5 pt-5 pb-12 pb-8 md:px-8 text-base/6 md:text-lg/6 my-7 md:my-0 border">
      <div className="font-bold mb-4">Order Summary</div>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <NairaWrapper>{calculateSubTotal().toLocaleString()}</NairaWrapper>
        </div>
        <div className="flex justify-between">
          <div>Shipping Fee</div>
          <NairaWrapper>{shipping ? shipping.price : 0}</NairaWrapper>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <NairaWrapper>0</NairaWrapper>
        </div>
        <div className="flex justify-between font-bold">
          <div>Total</div>
          <NairaWrapper>{grandTotal}</NairaWrapper>
        </div>
      </div>

      {!bare && (
        <div>
          <div className="mt-5 mb-4">Discount Code:</div>
          <form
            onSubmit={handleFormSubmit}
            className="flex justify-between items-center"
          >
            <div className="mr-5">
              <Input
                placeholder="Add discount code"
                name="symptom"
                type="text"
                value={discountCode}
                changed={(e) => setdiscountCode(e.target.value)}
              />
            </div>
            <FormButton disabled={discountCode.length <= 2} consistent>
              Apply
            </FormButton>
          </form>
        </div>
      )}
    </BorderedWrappper>
  );
};

export default OrderSummaryCard;
