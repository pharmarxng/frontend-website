import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import SearchBar from '../components/SearchBar';
import CartBlock from '../components/blocks/CartBlock';
import Footer from '../components/blocks/Footer';
import RecentlyViewedProducts from '../components/blocks/RecentlyViewedProducts';

const Cart = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <div className="flex justify-center my-7">
          <SearchBar />
        </div>
        <CartBlock />
        <RecentlyViewedProducts />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default Cart;
