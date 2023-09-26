import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import SearchBar from '../components/SearchBar';
import ProductListsingsBlock from '../components/blocks/ProductListsingsBlock';
import Footer from '../components/blocks/Footer';

const ProductListings = () => {
  const { categoryId } = useParams();

  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <div className="flex justify-center my-7">
          <SearchBar />
        </div>
        <ProductListsingsBlock categoryId={categoryId!} />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ProductListings;
