import { OrderState } from '../../context/orderContext';
import FormButton from '../FormButton';

const PickupDetailsBlock = () => {
  const { orderState } = OrderState();

  const disableButton = () => {
    return orderState.email?.length <= 0;
  };

  return (
    <div className="w-full">
      <div className="mb-6">Pickup Locations</div>
      <div className="flex flex-col space-y-[6px] bg-gray-100 px-3 py-2 rounded-lg w-full">
        <div>PharmaRx</div>
        <div>1A, Providence Mall, Providence Street, Lekki Phase 1, Lagos</div>
      </div>
      <div className="flex justify-end mt-14">
        <FormButton disabled={disableButton()}>Continue to payment</FormButton>
      </div>
    </div>
  );
};

export default PickupDetailsBlock;
