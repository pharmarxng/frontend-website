import { CartState } from '../../context/cartContext';
import { IProducts } from '../../utils/interfaces';
import CartItemButton from '../CartItemButton';

const CartBlock = () => {
  const {
    cartDispatch,
    cartState: { cart, checkedItems },
  } = CartState();

  const handleRemoveItemFromCart = (id: string) => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  const cartContent = cart.map((cartItem: IProducts) => {
    const isChecked = checkedItems.includes(cartItem.id);
    return (
      <div
        key={cartItem.id}
        className="grid grid-cols-6 gap-2 font-bold items-center border-b-2 border-greyBorder-100 py-7"
      >
        <input
          type="checkbox"
          id={cartItem.id}
          name={cartItem.id}
          checked={isChecked}
          onChange={() =>
            cartDispatch({
              type: 'TOGGLE_PRODUCT_CHECK',
              payload: cartItem.id,
            })
          }
        />
        <div className="flex space-x-7 items-center text-sm/4 sm:text-lg/6 col-span-3">
          <div className="w-24 h-20 sm:w-32 sm:h-24">
            <img
              src={cartItem.image}
              alt="Product Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div>{cartItem.name}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CartItemButton
            itemId={cartItem.id}
            noOfPurchasebleUnits={cartItem.noOfUnitsToPurchase!}
            noOfAvailableUnits={cartItem.noOfUnitsAvailable}
          />
          <div
            className="text-base/5 md:text-lg/5 mt-2 font-normal"
            onClick={() => handleRemoveItemFromCart(cartItem.id)}
          >
            Remove
          </div>
        </div>
        <div className="flex text-lg/5 items-center">
          <img
            src="/svg/naira.svg"
            alt="naira"
            className="w-6 h-6 object-cover"
          />
          {cartItem.price.toLocaleString()}
        </div>
      </div>
    );
  });

  return (
    <div className="text-black">
      {cart.length > 0 ? (
        <div className="flex md:grid grid-cols-3">
          <div className="col-span-2 ">
            <div className="text-base/5 md:text-3xl/10 mb-2 md:mb-8">Cart</div>
            <div className="hidden md:grid grid-cols-6 gap-2 items-center mb-8 ">
              <input
                type="checkbox"
                id={`checkall`}
                name={`checkall`}
                checked={checkedItems.length === cart.length}
                onChange={() =>
                  cartDispatch({
                    type: 'TOGGLE_PRODUCT_CHECK_ALL',
                  })
                }
              />
              <div className="col-span-3">PRODUCT</div>
              <div>QUANTITY</div>
              <div>PRICE</div>
            </div>
            <div>{cartContent}</div>
          </div>
          <div>checkout card</div>
        </div>
      ) : (
        <div className="text-center text-base/5 sm:text-2xl">
          Opps... You have nothing in your cart yet
        </div>
      )}
    </div>
  );
};

export default CartBlock;
