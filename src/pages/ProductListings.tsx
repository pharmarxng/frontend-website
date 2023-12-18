import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import ProductListsingsBlock from '../components/blocks/ProductListsingsBlock';
import Footer from '../components/blocks/Footer';

const ProductListings = () => {
  const { categoryId, searchQuery } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        <ProductListsingsBlock
          categoryId={categoryId}
          searchQuery={searchQuery}
        />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ProductListings;
