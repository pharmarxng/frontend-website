import { IProducts } from '../utils/interfaces';
import NairaWrapper from './NairaWrapper';
import Rating from './Rating';

interface ProductCardProps {
  prod: IProducts;
}

const ProductCard = ({ prod }: ProductCardProps) => {
  return (
    <div key={prod.id} className="mb-8 sm:mb-10">
      <div className="h-40 md:h-72 mb-2">
        <img
          src={prod.image}
          alt="Product Image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="text-base/5 sm:text-xl/6 font-medium mb-2">
        {prod.name}
      </div>
      <div className="w-5 h-5 md:w-6 md:h-6 mb-5">
        <Rating rating={prod.rating} onClick={() => {}} />
      </div>
      <div className="text-xs/4 sm:text-base/5 mb-5">{prod.description}</div>
      <NairaWrapper classDef="text-xs/4 sm:text-midbase">
        {prod.price.toLocaleString()}
      </NairaWrapper>
    </div>
  );
};

export default ProductCard;
