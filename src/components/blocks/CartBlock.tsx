import { useNavigate } from 'react-router-dom';
import { CartState } from '../../context/cartContext';
import { IProducts } from '../../utils/interfaces';
import Button from '../Button';
import CartItemButton from '../CartItemButton';
import CheckoutCard from '../CheckoutCard';
import NairaWrapper from '../NairaWrapper';
import { PATH } from '../../utils/path-constant';

const CartBlock = () => {
  const {
    cartDispatch,
    cartState: { cart, checkedItems },
  } = CartState();
  const navigate = useNavigate();

  const handleRemoveItemFromCart = (id: string) => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  const goToShop = () => {
    navigate(`${PATH.SHOP}`);
  };

  const cartContent = cart.map((cartItem: IProducts) => {
    const isChecked = checkedItems.includes(cartItem.id);
    return (
      <div key={cartItem.id}>
        {/* bigger screens view */}
        <div className="hidden md:grid md:grid-cols-6 gap-2 font-bold items-center border-b-2 border-greyBorder-100 py-7">
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
            className="dark:text-black dark:bg-white"
          />
          <div className="flex space-x-7 items-center text-sm/4 sm:text-lg/6 col-span-3">
            <div className="w-24 h-20 sm:w-32 sm:h-24">
              <img
                src={cartItem.image}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div>{cartItem.name}</div>
          </div>
          <div className="flex flex-col justify-center items-center font-medium">
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
          <NairaWrapper classDef="hidden md:flex text-lg/5 items-center font-normal">
            {cartItem.price.toLocaleString()}
          </NairaWrapper>
        </div>

        {/* mobile screens */}
        <div className="md:hidden flex border-b-2 border-greyBorder-100 pl-8 pt-8 pr-4 pb-4">
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
            className="dark:text-black dark:bg-white"
          />
          <div className="w-24 h-20 sm:w-36 sm:h-28 mx-7 sm:mx-10">
            <img
              src={cartItem.image}
              alt="Product Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:justify-center space-y-5 sm:space-x-7 text-sm/4">
            <div className="font-bold flex sm:sm:justify-center">
              {cartItem.name}
            </div>
            <NairaWrapper classDef="flex text-lg/5 items-center sm:justify-center">
              {cartItem.price.toLocaleString()}
            </NairaWrapper>
            <div className="flex flex-col items-center w-full">
              <CartItemButton
                itemId={cartItem.id}
                noOfPurchasebleUnits={cartItem.noOfUnitsToPurchase!}
                noOfAvailableUnits={cartItem.noOfUnitsAvailable}
              />
              <div
                className="text-base/5 mt-2 font-normal"
                onClick={() => handleRemoveItemFromCart(cartItem.id)}
              >
                Remove
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="text-black my-7 md:my-14">
      {cart.length > 0 ? (
        <div>
          <div className="text-base/5 md:text-3xl/10 mb-2 md:mb-8">Cart</div>
          <div className="md:grid grid-cols-3 md:gap-12">
            <div className="col-span-2 ">
              <div className="hidden md:grid md:grid-cols-6 gap-2 items-center mb-8 ">
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
                  className="dark:text-black dark:bg-white"
                />
                <div className="col-span-3">PRODUCT</div>
                <div>QUANTITY</div>
                <div>PRICE</div>
              </div>
              <div
                className={`${
                  cart.length >= 2 ? 'h-80 md:h-96' : 'h-56'
                } overflow-y-auto`}
              >
                {cartContent}
              </div>
            </div>
            <div>
              <CheckoutCard />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-base/5 sm:text-2xl flex flex-col space-y-3">
          <div className=" text-xl">Your cart is empty!</div>
          <div className=" text-base">
            Browse our categories and discover our best deals!
          </div>
          <div className="flex justify-center mt-2">
            <Button
              onclick={goToShop}
              buttonStyle="bg-deepBlue-100 text-white px-2"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartBlock;
