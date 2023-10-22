import { useState } from 'react';
import Rating from './Rating';
import { IProducts } from '../utils/interfaces';

interface ProductDescriptionCardProps {
  product: IProducts;
}

const ProductDescriptionCard = ({ product }: ProductDescriptionCardProps) => {
  const [noOfUnits] = useState<number>(1);

  return (
    <div>
      <div>{product.name}</div>
      <div className="w-5 h-5 md:w-6 md:h-6 mb-5">
        <Rating rating={product.rating} onClick={() => {}} />
        <div>{`${product.reviews?.length} reviews`}</div>
      </div>
      <div>{product.description}</div>
      <div>
        <div>Quantity</div>
        <div>
          {product.inStock ? <div>In stock</div> : <div>Out of stock</div>}
        </div>
      </div>
      <div>
        <div>{`${noOfUnits} unit${noOfUnits > 1 ? 's' : ''}`}</div>
        <div>-</div>
        <div>+</div>
      </div>
      <div>
        <div>Add to cart</div>
        <div>Buy now</div>
      </div>
    </div>
  );
};

export default ProductDescriptionCard;
