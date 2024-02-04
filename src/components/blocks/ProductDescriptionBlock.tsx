import { IProducts } from '../../utils/interfaces';
import ProductDescriptionCard from '../ProductDescriptionCard';

interface ProductDescriptionBlockProps {
  product: IProducts;
}

const ProductDescriptionBlock = ({ product }: ProductDescriptionBlockProps) => {
  return (
    <div className="md:pt-5">
      <div className="md:grid md:grid-cols-2 md:gap-3">
        <div className="mt-2 md:mt-0">
          <img src={product.image} alt="product image" />
        </div>
        <div>
          <ProductDescriptionCard product={product} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProductDescriptionBlock;
