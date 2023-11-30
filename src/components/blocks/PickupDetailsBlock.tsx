import { CartState } from '../../context/cartContext';
import { OrderState } from '../../context/orderContext';
import { IProducts } from '../../utils/interfaces';
import FormButton from '../FormButton';
import axios from '../../axios/axios';
import { PATH } from '../../utils/path-constant';

const PickupDetailsBlock = () => {
  const {
    orderState: { email },
  } = OrderState();

  const {
    cartState: { cart, checkedItems },
  } = CartState();
  // const navigate = useNavigate();

  const disableButton = () => {
    return email?.length <= 0;
  };

  const goToOrderPayment = async () => {
    const products = cart
      .filter((product: IProducts) => checkedItems.includes(product.id))
      .map((product: IProducts) => ({
        productId: product.id,
        quantity: product.noOfUnitsToPurchase,
      }));

    const body = {
      deliveryType: 'pickup',
      products,
      email,
    };
    try {
      const response = await axios.post('/api/v1/order/create-order', body);
      console.log({ response });
      if (response.data.statusCode !== 201) {
        throw new Error(response.data.message);
      }
      const order = response.data.data;
      const paymentBody = {
        orderId: order.orderId,
        callback_url: `${window.location.host}${PATH.ORDER_DETAILS}/${order.orderId}`,
      };

      const paymentResponse = await axios.post(
        '/api/v1/order/make-payment',
        paymentBody
      );
      console.log({ paymentResponse });
      window.location.href = paymentResponse.data.data.authorization_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">Pickup Locations</div>
      <div className="flex flex-col space-y-[6px] bg-gray-100 px-3 py-2 rounded-lg w-full">
        <div>PharmaRx</div>
        <div>1A, Providence Mall, Providence Street, Lekki Phase 1, Lagos</div>
      </div>
      <div className="flex justify-end mt-14">
        <FormButton disabled={disableButton()} clicked={goToOrderPayment}>
          Continue to payment
        </FormButton>
      </div>
    </div>
  );
};

export default PickupDetailsBlock;
