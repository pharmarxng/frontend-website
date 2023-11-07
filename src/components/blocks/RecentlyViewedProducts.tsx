import { Link } from 'react-router-dom';
import { ProductState } from '../../context/productContext';
import { IProducts } from '../../utils/interfaces';
import ProductCard from '../ProductCard';

interface RecentlyViewedProductsProps {
  currentLyViewedProductId?: string;
}

const RecentlyViewedProducts = ({
  currentLyViewedProductId,
}: RecentlyViewedProductsProps) => {
  const {
    productState: { recentlyViewed },
  } = ProductState();
  const content = recentlyViewed
    .filter((prod: IProducts) => prod.id !== currentLyViewedProductId)
    .map((prod: IProducts) => (
      <Link key={prod.id} to={`/product/${prod.id}`}>
        <ProductCard prod={prod} />
      </Link>
    ));

  return (
    <div>
      {content.length && (
        <div className="py-5 sm:py-12 text-black">
          <div className=" text-xl/6 sm:text-3xl/10 mb-14 font-bold">
            Recently Viewed
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentlyViewedProducts;
