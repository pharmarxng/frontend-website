import { PageWrapper, Table } from 'components';
import { TableConfig } from './TableConfig';
import FadeLoader from 'react-spinners/FadeLoader';
// import { Range } from 'react-date-range';
import { useEffect, useState } from 'react';
import { AdminState } from '@context/adminContext';
import Paginator from '@components/Paginator';
import { AlertState } from '@context/alertContext';
import { getAdminOrders } from '@api/admin';
import { IOrder, IOrderedProducts } from '@utils/interfaces';
import { formatDate } from '@utils/date';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@utils/path-constant';

const Orders = (): JSX.Element => {
  const {
    adminState: { orderPagination, orders, searchQuery },
    adminDispatch,
  } = AdminState();
  const [loading, setLoading] = useState<boolean>(false);
  const { alertDispatch } = AlertState();
  const navigate = useNavigate();
  const params = {
    search: searchQuery ? searchQuery : null,
    sort: 'createdAt,-1',
  };

  useEffect(() => {
    try {
      fetchData(params);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alertDispatch({ type: 'ALERT_ERROR', payload: error.message });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    await getAdminOrders(adminDispatch, alertDispatch, params);
    setLoading(false);
  };

  // const [date, setDate] = useState<Range[]>([
  //   {
  //     startDate: new Date(),
  //     endDate: undefined,
  //     key: 'selection',
  //   },
  // ]);

  //on date change reload paginated data

  function checkAll(): void {
    const elements = document.getElementsByTagName('input') ?? [];
    for (let i = 1; i < elements.length; i++) {
      elements[i].checked = elements[0].checked;
    }
  }

  const handleOrderRowClicked = (id: string) => {
    navigate(`/admin${PATH.ORDER_DETAILS}/${id}`);
  };

  return (
    <PageWrapper>
      <div className="flex-1 min-h-screen p-6 lg:p-12">
        <header className="gap-3 md:gap-0 pt-14 md:pt-0 flex flex-col md:flex-row justify-between mb-7 md:items-center">
          <h2 className="text-2xl text-black font-bold">Orders</h2>
          <input
            type="search"
            placeholder="Search by Order ID, customer or status"
            name="searchBar"
            value={searchQuery}
            onChange={(e) => {
              adminDispatch({
                type: 'FILTER_ORDERS_BY_SEARCH',
                payload: e.target.value,
              });
            }}
            className="flex justify-center gap-2 bg-white p-3.5 rounded-lg  min-w-[350px] text-black"
          />
          {/* <DatePicker date={date} setDate={setDate} /> */}
        </header>

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
          <div className="overflow-x-scroll">
            <Table
              config={TableConfig(
                orders.map((order: IOrder) => {
                  const prods = order.products
                    .map((product: IOrderedProducts) => {
                      if (typeof product.productId === 'string') {
                        return product.productId;
                      } else {
                        return product.productId.name;
                      }
                    })
                    .join(', ');

                  return {
                    ...order,
                    product: prods,
                    createdAt: formatDate(order.createdAt),
                    customer: `${order.firstName} ${order.lastName}`,
                  };
                }),
                checkAll
              )}
              onRowClick={handleOrderRowClicked}
            />
          </div>
        )}
        <Paginator
          pageLimit={orderPagination?.limit}
          maxPages={orderPagination?.totalPages}
          currentPage={orderPagination?.page}
          getPageApi={fetchData}
          setLoading={setLoading}
          objectParams={params}
        />
      </div>
    </PageWrapper>
  );
};

export default Orders;
