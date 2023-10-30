import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdApi } from '../api/products';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import SearchBar from '../components/SearchBar';
import Footer from '../components/blocks/Footer';
import ProductDescriptionBlock from '../components/blocks/ProductDescriptionBlock';
import { ProductState } from '../context/productContext';

const ProductDescription = () => {
  const { productId } = useParams();

  const {
    productDispatch,
    productState: { product },
  } = ProductState();

  useEffect(() => {
    const fetchData = async () => {
      await getProductByIdApi(productDispatch, productId!);
    };
    fetchData();
  }, [productDispatch, productId]);

  return (
    <div className="bg-white">
      <Navbar />
      <PaddedWrapper>
        <div className="flex justify-center my-7">
          <SearchBar />
        </div>
        {product && <ProductDescriptionBlock product={product} />}

        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ProductDescription;
