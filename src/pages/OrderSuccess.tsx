import { useNavigate } from 'react-router-dom';
import OrderSummaryCard from '../components/OrderSummaryCard';
import Button from '../components/Button';
import { PATH } from '../utils/path-constant';


const OrderSuccess = () => {
  const navigate = useNavigate();
  const goToShop = () => {
    navigate(`${PATH.SHOP}`);
  };

  return <div className="bg-white text-black gap-3 flex flex-col justify-center px-[16px] py[20px]">
    <div className="flex flex-col gap-[32px] px-[5px]">
      <div className="text-xl md:text-3xl">Order Confirmation</div>

      <div className="flex gap-5 items-center">
        <div>
          <img src="/images/Group.png" />
        </div>
        <div>
          <div className="text-base font-medium md:text-lg">Thank you</div>
          <div className="text-xs md:text-base">Your order #BE12345 has been placed.</div>
        </div>
      </div>

      <div className="text-sm md:text-lg font-medium">We sent an email to orders@banuelson.com with your order confirmation and bill.</div>

      <div className="text-base md:text-lg font-medium">Time placed: 17/02/2020 12:45 WAT</div>
      

      <div>
        <div className="text-base font-xl">Shipping</div>
        <div className="flex flex-col gap-2.5 px-[17px] py-[22px] text-sm md:text-lg bg-grey-400">
          <div>Bright Preye</div>
          <div>brightpreye@gmail.com</div>
          <div>No 45 Abraham George street, Ikeja, Lagos, Nigeria</div>
        </div>
      </div>
        <div className="mb-[39px]">
        <OrderSummaryCard />
        </div>
    </div>

    <div className="flex justify-center pt-[39px] border-t-2 grey-400">
      <Button
        onclick={goToShop}
        buttonStyle="bg-deepBlue-100 text-white px-2 w-full"
      >
        Continue Shopping
      </Button>
    </div>

  </div>;
};

export default OrderSuccess;
