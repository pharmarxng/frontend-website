// import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { PATH } from '../utils/path-constant';
import Navbar from '../components/Navbar';
import FadeLoader from 'react-spinners/FadeLoader';
import { getOrderByIdApi } from '../api/products';
import OrderSummary from '../components/OrderSummary';
import { formatDate } from '../utils/date';

interface OrderDetailsProps {
  isOrderDetails?: boolean;
}

const OrderDetails = ({ isOrderDetails }: OrderDetailsProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedOrder = await getOrderByIdApi(id!);
        setOrder(fetchedOrder);
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const goToShop = () => {
    navigate(PATH.SHOP);
  };

  return (
    <div>
      <Navbar />
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
        <div className="bg-white text-black gap-3 flex flex-col justify-center px-[16px] py-[20px]">
          {order ? (
            <div className="flex flex-col gap-[32px] px-[5px]">
              <div className="text-xl md:text-3xl">
                Order {isOrderDetails ? 'Details' : 'Confirmation'}
              </div>

              {!isOrderDetails && (
                <div className=" flex flex-col gap-[32px]">
                  <div className="flex gap-5 items-center">
                    <div>
                      <img src="/images/Group.png" alt="Order Confirmation" />
                    </div>
                    <div>
                      <div className="text-base font-medium md:text-lg">
                        Thank you
                      </div>
                      <div className="text-xs md:text-base">
                        Your order has been placed.
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-lg font-medium">
                    Your receipt was sent to the email provided.
                  </div>

                  <div className="text-base md:text-lg font-medium">
                    Time placed: {formatDate(order.createdAt)}
                  </div>
                </div>
              )}

              <div>
                {!isOrderDetails && (
                  <div className="text-base font-xl font-bold">
                    Order Details:
                  </div>
                )}
                <div className="flex flex-col gap-2.5 px-[17px] py-[22px] text-sm md:text-lg bg-grey-400">
                  <div>{`Email: ${order.email}`}</div>
                  <div>{`Delivery Type: ${order.deliveryType}`}</div>
                  {order.deliveryType === 'delivery' && (
                    <div className="gap-2.5 ">
                      <div>{`Full name: ${order.firstName} ${order.lastName}`}</div>
                      <div>{`Address: ${order.address}`}</div>
                      <div>{`City: ${order.city}`}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-[39px]">
                <OrderSummary order={order} />
              </div>
            </div>
          ) : (
            <div>No order found</div>
          )}

          {!isOrderDetails ? (
            <div className="flex justify-center pt-[39px] border-t-2 grey-400">
              <Button
                onclick={goToShop}
                buttonStyle="bg-deepBlue-100 text-white px-2 w-full"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
