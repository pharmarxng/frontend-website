import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import ProductCard from '../ProductCard';
import { IProducts } from '../../utils/interfaces';
import { getFlashProductsApi } from '../../api/products';
import { AlertState } from '../../context/alertContext';

const FlashSales = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[] | null>();
  const { alertDispatch } = AlertState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedProducts = await getFlashProductsApi(alertDispatch);
      if (fetchedProducts.length) setProducts(fetchedProducts);
      setLoading(false);
    };
    fetchData();
  }, [alertDispatch]);

  const content =
    products &&
    products.slice(0, 8).map((prod: IProducts) => {
      if (prod) return (
        <Link key={prod.id} to={`/product/${prod.id}`}>
          <ProductCard prod={prod} bare />
        </Link>
      );
    });

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10">
          <FadeLoader
            color={'#2D547B'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {products && (
            <div className="py-5 sm:py-12 text-black">
              <div className="text-xl/6 sm:text-3xl/10 font-bold sm:font-normal whitespace-nowrap mb-5">
                Flash Sales
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-4 justify-center md:grid-cols-4">
                {content}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FlashSales;
