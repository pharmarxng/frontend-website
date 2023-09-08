import { IProducts } from '../utils/interfaces';
import Rating from './Rating';

interface ProductCardProps {
  prod: IProducts;
}

const ProductCard = ({ prod }: ProductCardProps) => {
  return (
    <div key={prod.id} className="mb-8 sm:mb-10">
      <div className="h-40 md:h-72 mb-2">
        <img
          src={prod.img}
          alt="Product Image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="text-base/5 sm:text-xl/6 font-medium mb-2">
        {prod.title}
      </div>
      <div className="w-5 h-5 md:w-6 md:h-6 mb-5">
        <Rating rating={prod.ratings} onClick={() => {}} />
      </div>
      <div className="text-xs/4 sm:text-base/5 mb-5">{prod.description}</div>
      <div className="flex text-xs/4 sm:text-midbase">
        <img
          src="/svg/naira.svg"
          alt="naira logo"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        {prod.price}
      </div>
    </div>
  );
};

export default ProductCard;
