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
import axios from '../axios/axios';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<Record<string, any> | null>(null);
  console.log({ order });

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

  const handleOrderCancel = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/order/cancel-order/' + id);
      const order = response.data.data;
      setOrder(order);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log({
    callback_url: `${window.location.host}${PATH.ORDER_DETAILS}/${id}`,
  });

  const handleOrderPayment = async (id: string) => {
    try {
      setLoading(true);
      const body = {
        id,
        callback_url: `${window.location.host}${PATH.ORDER_DETAILS}/${id}`,
      };

      const paymentResponse = await axios.post(
        '/api/v1/order/make-payment',
        body
      );
      window.location.href = paymentResponse.data.data.authorization_url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen text-black ">
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
        <div className="flex justify-center">
          <div className="gap-3 flex flex-col justify-center px-4 py-5">
            {order ? (
              <div className="flex flex-col gap-[32px] px-[5px]">
                <div className="text-xl md:text-3xl">
                  Order {order!.isPaid ? 'Confirmation' : 'Details'}
                </div>

                {order!.isPaid && (
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
                  {order!.isPaid && (
                    <div className="text-base font-xl font-bold">
                      Order Details:
                    </div>
                  )}
                  <div className="flex flex-col gap-2.5 px-[17px] py-[22px] text-sm md:text-lg bg-grey-400">
                    <div>
                      <span className="font-bold">Email: </span>
                      {order.email}
                    </div>
                    <div>
                      <span className="font-bold">Delivery Type: </span>
                      {order.deliveryType}
                    </div>
                    {order.deliveryType === 'delivery' && (
                      <div className="gap-2.5 ">
                        <div>
                          <span className="font-bold">Full name: </span>
                          {`${order.firstName} ${order.lastName}`}
                        </div>
                        <div>
                          <span className="font-bold">Address: </span>
                          {order.address}
                        </div>
                        <div>
                          <span className="font-bold">City: </span>
                          {order.city}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-[39px]">
                  <OrderSummary order={order} />
                </div>

                {order!.isPaid || order.status === 'cancelled' ? (
                  <div className="flex items-center justify-center">
                    <Button
                      onclick={goToShop}
                      buttonStyle="bg-deepBlue-100 text-white px-2 w-full md:w-auto"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onclick={() => handleOrderCancel(order.id)}
                      buttonStyle="bg-red-600 text-white px-2 w-full"
                    >
                      Cancel Order
                    </Button>
                    <Button
                      onclick={() => handleOrderPayment(order.id)}
                      buttonStyle="bg-deepBlue-100 text-white px-2 w-full"
                    >
                      Make Payment
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div>No order found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
