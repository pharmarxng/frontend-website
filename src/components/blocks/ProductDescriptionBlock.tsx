import { IProducts } from '../../utils/interfaces';
import ProductDescriptionCard from '../ProductDescriptionCard';

interface ProductDescriptionBlockProps {
  product: IProducts;
}

const ProductDescriptionBlock = ({ product }: ProductDescriptionBlockProps) => {
  return (
    <div>
      <div>
        <div>
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