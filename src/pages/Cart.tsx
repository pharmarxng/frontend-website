import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import CartBlock from '../components/blocks/CartBlock';
import Footer from '../components/blocks/Footer';
import RecentlyViewedProducts from '../components/blocks/RecentlyViewedProducts';
import TrendingProducts from '../components/blocks/TrendingProducts';

const Cart = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <CartBlock />
        <RecentlyViewedProducts />
        <TrendingProducts />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default Cart;
