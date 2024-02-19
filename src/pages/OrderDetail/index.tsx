import { getOrderByIdApi } from '@api/admin';
import Button from '@components/Button';
import { ConfirmOrder } from '@components/ModalGroup/content';
import OrderSummary from '@components/OrderSummary';
import PageWrapper from '@components/PageWrapper';
import { AdminState } from '@context/adminContext';
import { AlertState } from '@context/alertContext';
import { useModalContext } from '@context/modalContext';
import { formatDate } from '@utils/date';
import { IModal, OrderStatus } from '@utils/interfaces';
import { formatString } from '@utils/string';
import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';

const OrderDetails = (): JSX.Element => {
  const { id } = useParams();
  const { alertDispatch } = AlertState();
  const {
    adminDispatch,
    adminState: { order },
  } = AdminState();
  const [loading, setLoading] = useState<boolean>(false);
  const { setContent, setIsOpenModal } = useModalContext() as IModal;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchedOrder = await getOrderByIdApi(
          id!,
          adminDispatch,
          alertDispatch
        );
        if (!fetchedOrder) {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, alertDispatch, adminDispatch]);

  const showModal = (content: ReactNode): void => {
    setIsOpenModal(true);
    setContent(content);
  };

  const isCancelledDisabled = () => {
    return (
      order?.isPaid ||
      order?.status === OrderStatus.CANCELLED ||
      order?.status === OrderStatus.COMPLETED
    );
  };

  const isConfirmedDisabled = () => {
    return (
      order?.status === OrderStatus.CANCELLED ||
      order?.status === OrderStatus.COMPLETED
    );
  };

  return (
    <PageWrapper>
      <div className="flex justify-center text-black">
        <div className="gap-3 flex flex-col justify-center px-4 py-5">
          {loading ? (
            <div className="flex justify-center mt-10">
              <FadeLoader
                color={'#2D547B'}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : order ? (
            <div className="flex flex-col gap-3 md:gap-[32px] px-[5px]">
              <div className="text-xl md:text-3xl">Order Details</div>

              <div className="">
                <div className="flex flex-col gap-2.5 px-[17px] py-[22px] text-sm md:text-lg bg-grey-400">
                  <div>
                    <span className="font-bold">Orderid: </span>#{order.orderId}
                  </div>
                  <div>
                    <span className="font-bold">Time placed: </span>
                    {formatDate(order.createdAt)}
                  </div>
                  <div>
                    <span className="font-bold">Email: </span>
                    {formatString(order.email)}
                  </div>
                  <div>
                    <span className="font-bold">Phone: </span>
                    {formatString(order.phone)}
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
                  <div>
                    <span className="font-bold">Full name: </span>
                    {`${formatString(order.firstName!)} ${formatString(
                      order.lastName!
                    )}`}
                  </div>
                  <div>
                    <span className="font-bold">Address: </span>
                    {formatString(order.address!) || `Pickup request`}
                  </div>
                  <div>
                    <span className="font-bold">City: </span>
                    {formatString(order.city!) || `Pickup request`}
                  </div>
                  <div>
                    <span className="font-bold">Order Status: </span>
                    {formatString(order.status!)}
                  </div>
                </div>
              </div>

              <div className="">
                <OrderSummary order={order} />
              </div>

              <div className="flex gap-2">
                <Button
                  onclick={() => showModal(<ConfirmOrder type="cancel" />)}
                  disabled={isCancelledDisabled()}
                  buttonStyle="bg-red-600 text-white px-2 w-full"
                >
                  Cancel Order
                </Button>
                <Button
                  onclick={() => showModal(<ConfirmOrder type="confirm" />)}
                  disabled={isConfirmedDisabled()}
                  buttonStyle="bg-deepBlue-100 text-white px-2 w-full"
                >
                  Confirm Order
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center mt-10">No order found!</div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default OrderDetails;
