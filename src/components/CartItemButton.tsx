import { ReactNode } from 'react';
import { CartState } from '../context/cartContext';

interface CartItemButtonProps {
  itemId: string;
  noOfPurchasebleUnits: number;
  noOfAvailableUnits: number;
}

const CartItemButton = ({
  noOfPurchasebleUnits,
  noOfAvailableUnits,
  itemId,
}: CartItemButtonProps) => {
  const { cartDispatch } = CartState();

  const handleAddPurchaseableUnit = () => {
    cartDispatch({
      type: 'INCREASE_PURCHASEABLE_UNIT',
      payload: itemId,
    });
  };

  const handleReducePurchaseableUnit = () => {
    cartDispatch({
      type: 'REDUCE_PURCHASEABLE_UNIT',
      payload: itemId,
    });
  };

  return (
    <div className="flex shadow-lg rounded-lg border border-greyBorder-100 px-1 py-4 space-x-2 md:px-3 md:py-5 md:space-x-4">
      <CartItemButtonWrapper
        onclick={handleReducePurchaseableUnit}
        disabled={!noOfPurchasebleUnits}
      >
        -
      </CartItemButtonWrapper>
      <div className="text-sm/4 md:text-lg/5">{noOfPurchasebleUnits}</div>
      <CartItemButtonWrapper
        onclick={handleAddPurchaseableUnit}
        disabled={!noOfAvailableUnits}
      >
        +
      </CartItemButtonWrapper>
    </div>
  );
};

export default CartItemButton;

interface CartItemButtonWrapperProps {
  children?: ReactNode;
  onclick?: () => void;
  disabled?: boolean;
}

const CartItemButtonWrapper = ({
  children,
  onclick,
  disabled,
}: CartItemButtonWrapperProps) => {
  return (
    <div
      className={`items-center ${
        disabled
          ? 'cursor-not-allowed opacity-50 duration-300'
          : 'opacity-100 duration-300'
      } hover:cursor-pointer`}
      onClick={disabled ? undefined : onclick}
    >
      {children}
    </div>
  );
};
