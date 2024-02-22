import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductByIdApi } from '../api/products';
import Navbar from '../components/Navbar';
import PaddedWrapper from '../components/PaddedWrapper';
import Footer from '../components/blocks/Footer';
import ProductDescriptionBlock from '../components/blocks/ProductDescriptionBlock';
import { ProductState } from '../context/productContext';
import RecentlyViewedProducts from '../components/blocks/RecentlyViewedProducts';
import { AlertState } from '../context/alertContext';
import { FadeLoader } from 'react-spinners';

const ProductDescription = () => {
  const { productId } = useParams();
  const { alertDispatch } = AlertState();
  const {
    productDispatch,
    productState: { product },
  } = ProductState();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getProductByIdApi(productDispatch, alertDispatch, productId!);
      setLoading(false);
      try {
        setLoading(true);
        const fetchedProduct = await getProductByIdApi(
          productDispatch,
          alertDispatch,
          productId!
        );
        if (!fetchedProduct) {
          throw new Error('Something went wrong');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDispatch, productId]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PaddedWrapper>
        {loading ? (
          <div className="flex justify-center pt-[60px]">
            <FadeLoader
              color={'#2D547B'}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : product ? (
          <ProductDescriptionBlock product={product} />
        ) : (
          <></>
        )}
        <RecentlyViewedProducts currentLyViewedProductId={productId} />
        <Footer />
      </PaddedWrapper>
    </div>
  );
};

export default ProductDescription;
