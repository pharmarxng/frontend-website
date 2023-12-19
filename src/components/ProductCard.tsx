import { useState } from 'react';
import { IProducts } from '../utils/interfaces';
import NairaWrapper from './NairaWrapper';
import Rating from './Rating';

interface ProductCardProps {
  prod: IProducts;
  bare?: boolean;
}

const ProductCard = ({ prod, bare }: ProductCardProps) => {
  const allowdCharLength = 10;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription =
    prod.description.length > allowdCharLength
      ? prod.description.substring(0, allowdCharLength) + '...'
      : prod.description;

  return (
    <div
      key={prod.id}
      className="mb-8 sm:mb-10 hover:shadow-lg transition-transform transform hover:scale-105 p-1"
    >
      <div className="mb-2">
        <img
          src={prod.image}
          alt="Product Image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="text-base/5 sm:text-xl/6 font-medium mb-2">
        {prod.name}
      </div>
      {!bare && (
        <div className="w-5 h-5 md:w-6 md:h-6 mb-5">
          <Rating rating={prod.rating} onClick={() => {}} />
        </div>
      )}
      {!bare && (
        <div
          className={`text-sm/4 sm:text-base/5 mb-5 ${
            isExpanded || prod.description.length <= allowdCharLength
              ? 'overflow-visible'
              : 'overflow-hidden'
          }`}
        >
          {isExpanded || prod.description.length <= allowdCharLength
            ? prod.description
            : shortDescription}
          {!isExpanded && prod.description.length > allowdCharLength && (
            <button
              className="text-blue-500 cursor-pointer hover:underline text-xs"
              onClick={toggleExpand}
            >
              Read more
            </button>
          )}
        </div>
      )}
      <NairaWrapper classDef="text-xs/4 sm:text-midbase">
        {prod.price.toLocaleString()}
      </NairaWrapper>
    </div>
  );
};

export default ProductCard;
