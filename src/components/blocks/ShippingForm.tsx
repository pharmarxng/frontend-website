import { useEffect, useState } from 'react';
import { OrderState } from '../../context/orderContext';
import FormButton from '../FormButton';
import Input from '../Input';
import Label from '../Label';
import { CartState } from '../../context/cartContext';
import { getStandardDeliveryFeesApi } from '../../api/products';
import { IProducts, IShipping } from '../../utils/interfaces';
import { FadeLoader } from 'react-spinners';
import axios from '../../axios/axios';
import { PATH } from '../../utils/path-constant';
import { useNavigate } from 'react-router-dom';

console.log({ domain: window.location.host });

const ShippingForm = () => {
  const {
    orderState: {
      email,
      address,
      firstName,
      lastName,
      city,
      phone,
      postalCode,
    },
    orderDispatch,
  } = OrderState();

  const {
    cartState: { shippingList, cart, checkedItems, shipping },
    cartDispatch,
  } = CartState();

  const [localEmail, setLocalEmail] = useState<string>(email ? email : '');
  const [localAddress, setLocalAddress] = useState<string>(
    address ? address : ''
  );
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    await getStandardDeliveryFeesApi(cartDispatch, params);
    setLoading(false);
  };

  const handleEmailChange = () => {
    orderDispatch({ type: 'SET_EMAIL', payload: localEmail });
  };

  const handleAddressChange = () => {
    orderDispatch({ type: 'SET_ADDRESS', payload: localAddress });
  };

  const goToOrderPayment = async () => {
    const products = cart
      .filter((product: IProducts) => checkedItems.includes(product.id))
      .map((product: IProducts) => ({
        productId: product.id,
        quantity: product.noOfUnitsToPurchase,
      }));

    const body = {
      deliveryType: 'delivery',
      deliveryFee: shipping.id,
      products,
      email,
      firstName,
      lastName,
      address,
      city,
      phone,
      postalCode,
    };
    try {
      const response = await axios.post('/api/v1/order/create-order', body);
      if (response.data.statusCode !== 201) {
        throw new Error(response.data.message);
      }
      const order = response.data.data;
      navigate(`${PATH.ORDER_DETAILS}/${order.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const shippingListContent =
    shippingList &&
    shippingList.map((i: IShipping) => {
      return (
        <div
          key={i.id}
          className="flex justify-between items-center h-16 font-medium px-7"
        >
          <div className="flex gap-3">
            <Input
              name="shippingList"
              type="radio"
              value={i.location}
              changed={() =>
                cartDispatch({
                  type: 'SET_SHIPPING',
                  payload: i,
                })
              }
              classDef="w-[14px h-[14px] md:w-[19px] md:h-[19px]"
            />
            <div>{i.location}</div>
          </div>
          <div className="flex justify-end text-deepBlue-100">
            &#x20A6; {i.price}
          </div>
        </div>
      );
    });

  return (
    <div className="flex flex-col text-black pt-[30px] gap-12 ite">
      <div>
        {/* Contact Section */}
        <form className="flex justify-between items-center border-2 grey-300 rounded-t-lg font-medium px-1">
          <div className="flex items-center">
            <div className="opacity-50">
              <Label label="Contact" />
            </div>
            <Input
              placeholder="brightpreye@gmail.com"
              name="email"
              type="email"
              value={localEmail}
              changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLocalEmail(e.target.value);
              }}
              onBlur={handleEmailChange}
              classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
            />
          </div>
          <div
            onClick={handleEmailChange}
            className="flex justify-end text-sm text-deepBlue-100 md:text-lg"
          >
            change
          </div>
        </form>

        {/* Ship To Section */}
        <div className="flex justify-between items-center border-2 grey-300 rounded-b-lg px-1">
          <div className="flex items-center">
            <div className="opacity-50">
              <Label label="Ship to" />
            </div>
            <Input
              placeholder="No 45 Abraham George street, Ikeja, Lagos, Nigeria"
              name="address"
              type="text"
              value={localAddress}
              changed={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLocalAddress(e.target.value);
              }}
              onBlur={handleAddressChange}
              classDef="border-none focus:outline-none text-black bg-white text-sm md:text-lg"
            />
          </div>
          <div
            onClick={handleAddressChange}
            className="flex justify-end text-sm text-deepBlue-100 md:text-lg"
          >
            change
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="font-medium text-base md:text-lg">Shipping Method</div>
        <div className="font-medium text-sm md:text-lg">
          We are committed to delivering standard shipping orders to you within
          2-24 hours, provided that the orders are placed Monday to Friday
          before 2 pm. If you're seeking express delivery, simply return to your
          cart and click on the chat widget. Our team is here to assist you with
          expediting your order.
        </div>
      </div>

      <div className="">
        <form className="h-56 overflow-y-auto border-2 borber-grey-300 rounded-lg text-sm md:text-lg font-medium">
          {loading ? (
            <div className="flex justify-center mt-10">
              <FadeLoader
                color={'#2D547B'}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            shippingListContent
          )}
        </form>
      </div>
      <div className="flex md:justify-end">
        <FormButton disabled={!shipping} clicked={goToOrderPayment}>
          Continue to payment
        </FormButton>
      </div>
    </div>
  );
};

export default ShippingForm;
