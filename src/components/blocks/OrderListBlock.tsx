import OrderSummary from "../OrderSummary";

const order = {
  subTotal: 2000,
  deliveryFee: {
    price: 1000,
  },
  total: 3000
}

//  You would use the order summary like this:
//  You can then style the div




const OrderListBlock = () => {
  return (
    <div className="text-black re">
      <div>
        <div className="text-lg md:text-xl font-medium m-[20px]">Recent Orders</div>
        <div className='px-[25px]'>
          <form action="/search" method="GET">
            <input
              type="text"
              name="searchBar"
              placeholder="Search by order ID"
              className='border-2 grey-400 rounded-lg p-[10px] w-full' />
          </form>
        </div>

          <div className='bg-[#fafafa] mt-[30px] mb-[3px] rounded-lg flex justify-between p-[25px] items-center'>
          <div className="flex flex-col text-sm md:text-lg">
              <div className="font-bold">ORDER #565752</div>
              <div>30 NOV 2023</div>
            </div>
            <div className="text-secondary-300 font-medium">More Details</div>
          </div>
          <div className="mt-[3px]">
            <OrderSummary order={order} bare />
          </div>
      </div>
      <div className="bg-secondary-300 rounded-[10px] h-[48px] md:h-[74px] w-full  mt-[32px] text-center flex">
            <div className="w-full h-[29px] font-semibold text-[18px] md:text-2xl text-white m-auto">
              View Order
            </div>
          </div>
    </div>
  );
};

export default OrderListBlock;
