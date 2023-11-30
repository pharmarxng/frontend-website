import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import OrderListBlock from '../components/blocks/OrderListBlock';

const OrderList = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <OrderListBlock/>
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default OrderList;
