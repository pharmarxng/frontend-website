import OrderSummaryWrapper from '../OrderSummaryWrapper';
import DeliveryForm from './DeliveryForm';

const DeliveryInfoBlock = () => {
  return (
    <OrderSummaryWrapper>
      <DeliveryForm />
    </OrderSummaryWrapper>
  );
};

export default DeliveryInfoBlock;
