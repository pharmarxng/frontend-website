import { IOrder } from '@utils/interfaces';
import BorderedWrappper from './BorderedWrappper';
import NairaWrapper from './NairaWrapper';

interface OrderSummaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  order: IOrder;
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
      <div className="font-bold mb-5">Order Summary</div>
      <table className="flex flex-col space-y-3 mb-5 max-h-[190px] overflow-y-scroll">
        {order.products.map((products) => {
          let image;
          let price;
          let name;
          if (typeof products.productId === 'object') {
            image = products.productId.image;
            name = products.productId.name;
            price = products.productId.price;
          }

          return (
            <tbody key={products.id}>
              <tr className="border-b-2 border-b-gray-200 flex justify-between items-center">
                <td className="pb-2">
                  <img src={image} alt="Product image" className="w-16 h-12" />
                </td>
                <td>
                  <div>
                    <div>
                      {name} &nbsp;×&nbsp;{products.quantity}
                    </div>
                  </div>
                </td>
                <td>
                  <NairaWrapper>{price! * products.quantity}</NairaWrapper>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <div>Subtotal</div>
          <NairaWrapper>{order.subTotal}</NairaWrapper>
        </div>
        <div className="flex justify-between">
          <div>Shipping Fee</div>
          <NairaWrapper>
            {typeof order.deliveryFee === 'object'
              ? order.deliveryFee.price
              : 0}
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
