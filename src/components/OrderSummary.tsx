import BorderedWrappper from './BorderedWrappper';
import NairaWrapper from './NairaWrapper';

interface OrderSummaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  order: Record<string, any>;
  bare?: boolean;
  classDef?: string;
}

const OrderSummary = ({ order, bare, classDef }: OrderSummaryProps) => {
  return (
    <BorderedWrappper
      classDef={`px-5 pt-5 pb-12 pb-8 md:px-8 text-base/6 md:text-lg/6 my-7 md:my-0 ${
        bare ? '' : 'border'
      } ${classDef}`}
    >
      <div className="font-bold mb-4">Order Summary</div>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <NairaWrapper>{order.subTotal}</NairaWrapper>
        </div>
        <div className="flex justify-between">
          <div>Shipping Fee</div>
          <NairaWrapper>
            {order.deliveryFee ? order.deliveryFee.price : 0}
          </NairaWrapper>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <NairaWrapper>0</NairaWrapper>
        </div>
        <div className="flex justify-between font-bold">
          <div>Total</div>
          <NairaWrapper>{order.total}</NairaWrapper>
        </div>
      </div>
    </BorderedWrappper>
  );
};

export default OrderSummary;
