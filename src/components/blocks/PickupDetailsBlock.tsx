import { CartState } from '../../context/cartContext';
import { OrderState } from '../../context/orderContext';
import { IProducts } from '../../utils/interfaces';
import FormButton from '../FormButton';
import axios from '../../axios/axios';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/path-constant';

const PickupDetailsBlock = () => {
  const {
    orderState: { email },
  } = OrderState();

  const {
    cartState: { cart, checkedItems },
  } = CartState();
  const navigate = useNavigate();

  const disableButton = () => {
    return email?.length <= 0;
  };

  const goToOrderPayment = () => {
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
    axios
      .post('/api/v1/order/create-order', body)
      .then((response) => {
        console.log({ response });
        navigate(`${PATH.ORDER_SUCCESS}`);
        return response.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
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
