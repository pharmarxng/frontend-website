import OrderSummaryWrapper from '../OrderSummaryWrapper';
import ShippingForm from './ShippingForm';

const ShippingInfoBlock = () => {
  return (
    <OrderSummaryWrapper plain>
      <ShippingForm />
    </OrderSummaryWrapper>
  );
};

export default ShippingInfoBlock;
