// import { useEffect, useState } from 'react';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { PATH } from '../utils/path-constant';
import Navbar from '../components/Navbar';
import FadeLoader from 'react-spinners/FadeLoader';
import OrderSummary from '../components/OrderSummary';
import { formatDate } from '../utils/date';
import axios from '../axios/axios';
import { getOrderByIdApi } from '../api/order';
import { AlertState } from '../context/alertContext';
import { OrderState } from '../context/orderContext';
import { formatString } from '../utils/string';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { alertDispatch } = AlertState();
  const { orderDispatch } = OrderState();
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [order, setOrder] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedOrder = await getOrderByIdApi(
          id!,
          orderDispatch,
          alertDispatch
        );
        setOrder(fetchedOrder);
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, alertDispatch, orderDispatch]);

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

  const handleOrderPayment = async (id: string) => {
    try {
      setLoading(true);
      const body = {
        id,
        callback_url: `https://${window.location.host}${PATH.ORDER_DETAILS}/${id}`,
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
                      <span className="font-bold">Orderid: </span>#
                      {order.orderId}
                    </div>
                    <div>
                      <span className="font-bold">Email: </span>
                      {formatString(order.email)}
                    </div>
                    <div>
                      <span className="font-bold">Delivery Type: </span>
                      {formatString(order.deliveryType)}
                    </div>
                    {order.deliveryType === 'pickup' && (
                      <div>
                        <span className="font-bold">Pickup Location: </span>1A,
                        Providence Mall, Providence Street, Lekki Phase 1, Lagos
                      </div>
                    )}
                    {order.deliveryType === 'delivery' && (
                      <div className="gap-2.5 ">
                        <div>
                          <span className="font-bold">Full name: </span>
                          {`${formatString(order.firstName)} ${formatString(
                            order.lastName
                          )}`}
                        </div>
                        <div>
                          <span className="font-bold">Address: </span>
                          {formatString(order.address)}
                        </div>
                        <div>
                          <span className="font-bold">City: </span>
                          {formatString(order.city)}
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
