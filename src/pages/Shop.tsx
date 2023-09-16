import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Categories from '../components/blocks/Categories';
import Footer from '../components/blocks/Footer';

const Shop = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <Categories />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default Shop;
