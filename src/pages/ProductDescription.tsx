import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdApi } from '../api/products';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import ProductDescriptionBlock from '../components/blocks/ProductDescriptionBlock';
import { ProductState } from '../context/productContext';
import RecentlyViewedProducts from '../components/blocks/RecentlyViewedProducts';
import { AlertState } from '../context/alertContext';

const ProductDescription = () => {
  const { productId } = useParams();
  const { alertDispatch } = AlertState();
  const {
    productDispatch,
    productState: { product },
  } = ProductState();

  useEffect(() => {
    const fetchData = async () => {
      await getProductByIdApi(productDispatch, alertDispatch, productId!);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDispatch, productId]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        {product && <ProductDescriptionBlock product={product} />}
        <RecentlyViewedProducts currentLyViewedProductId={productId} />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ProductDescription;
