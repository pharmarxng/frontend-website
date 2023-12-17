import { useEffect } from 'react';
import { ProductState } from '../../context/productContext';
import { IProducts } from '../../utils/interfaces';
import ProductCard from '../ProductCard';
import { getTrendingProductsApi } from '../../api/products';
import { AlertState } from '../../context/alertContext';

const TrendingProducts = () => {
  const {
    productDispatch,
    productState: { trendingProducts },
  } = ProductState();
  const { alertDispatch } = AlertState();

  useEffect(() => {
    const fetchData = async () => {
      await getTrendingProductsApi(productDispatch, alertDispatch);
    };
    fetchData();
  }, [productDispatch, alertDispatch]);

  const productsContent = trendingProducts.map(
    (i: IProducts, index: number) => {
      return (
        <div key={index}>
          <ProductCard prod={i} />
        </div>
      );
    }
  );

  return (
    <div className="py-5 sm:py-12 text-black">
      <div className="text-center text-xl/6 sm:text-3xl/10 mb-14 font-bold">
        Trending Products
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4">
        {productsContent}
      </div>
    </div>
  );
};

export default TrendingProducts;
