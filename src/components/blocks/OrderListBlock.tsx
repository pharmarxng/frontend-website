import { useEffect, useState } from 'react';
import { isAthenticated } from '../../utils/auth';
import OrderSummary from '../OrderSummary';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../utils/path-constant';
import { OrderState } from '../../context/orderContext';
import { AlertState } from '../../context/alertContext';
import { getOrdersApi } from '../../api/order';
import { IOrder } from '../../utils/interfaces';
import Paginator from '../Paginator';
import FadeLoader from 'react-spinners/FadeLoader';
import Button from '../Button';
import { formatDate } from '../../utils/date';
import Input from '../Input';

const OrderListBlock = () => {
  const authenticated = isAthenticated();
  const [loading, setLoading] = useState<boolean>(false);
  const [showDetailsMap, setShowDetailsMap] = useState<{
    [orderId: string]: boolean;
  }>({});
  const {
    orderDispatch,
    orderState: { orders, pagination, searchQuery },
  } = OrderState();
  const { alertDispatch } = AlertState();
  const navigate = useNavigate();

  const params = {
    search: searchQuery ? searchQuery : null,
    sort: 'createdAt,-1',
  };

  useEffect(() => {
    try {
      if (!authenticated) {
        navigate(PATH.LOGIN);
        throw new Error(`Unauthorised. Please login to view`);
      }
      fetchData(params);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alertDispatch({ type: 'ALERT_ERROR', payload: error.message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, navigate, searchQuery]);

  const toggleDetails = (orderId: string) => {
    setShowDetailsMap((prevMap) => ({
      ...prevMap,
      [orderId]: !prevMap[orderId],
    }));
  };

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    await getOrdersApi(orderDispatch, alertDispatch, params);
    setLoading(false);
  };

  const goToOrderDetails = (id: string) => {
    navigate(`${PATH.ORDER_DETAILS}/${id}`);
  };

  return (
    <div className="text-black re">
      <div className="text-lg md:text-xl font-medium m-[20px]">
        Recent Orders
      </div>
      <div className="px-6">
        <Input
          type="text"
          name="searchBar"
          placeholder="Search by order ID"
          changed={(e) => {
            orderDispatch({
              type: 'FILTER_BY_SEARCH',
              payload: e.target.value,
            });
          }}
          value={searchQuery}
        />
      </div>

      {loading ? (
        <div className="flex justify-center mt-10">
          <FadeLoader
            color={'#2D547B'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center mt-10">No Order found</div>
      ) : (
        orders.map((order: IOrder) => {
          return (
            <div key={order.id} className="border-b-2 border-gray-300">
              <div className="bg-[#fafafa] mt-[30px] mb-[3px] rounded-lg flex justify-between p-[25px] items-center">
                <div className="flex flex-col text-sm md:text-lg">
                  <div className="font-bold">ORDERID: #{order.orderId}</div>
                  <div>{formatDate(order.createdAt!)}</div>
                </div>
                <div
                  className="text-secondary-300 font-medium cursor-pointer"
                  onClick={() => toggleDetails(order.orderId!)}
                >
                  {showDetailsMap[order.orderId!]
                    ? 'Less Details'
                    : 'More Details'}
                </div>
              </div>
              {showDetailsMap[order.orderId!] && (
                <div className="mt-[3px]">
                  <OrderSummary order={order} bare />
                </div>
              )}

              <div className=" md:flex md:justify-center">
                <Button
                  onclick={() => goToOrderDetails(order.id)}
                  buttonStyle="bg-deepBlue-100 md:text-2xl md:px-3 my-3 font-semibold text-white"
                >
                  View Order
                </Button>
              </div>
            </div>
          );
        })
      )}
      <Paginator
        pageLimit={pagination?.limit}
        maxPages={pagination?.totalPages}
        currentPage={pagination?.page}
        getPageApi={fetchData}
        setLoading={setLoading}
        objectParams={params}
      />
    </div>
  );
};

export default OrderListBlock;
