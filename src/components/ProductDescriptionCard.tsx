import Rating from './Rating';
import { IProducts } from '../utils/interfaces';
import { ProductState } from '../context/productContext';
import Button from './Button';
import { CartState } from '../context/cartContext';
import { useNavigate } from 'react-router-dom';

interface ProductDescriptionCardProps {
  product: IProducts;
}

const ProductDescriptionCard = ({ product }: ProductDescriptionCardProps) => {
  const navigate = useNavigate();
  const { productDispatch } = ProductState();
  const { cartDispatch } = CartState();

  const handleAddPurchaseableUnit = () => {
    productDispatch({
      type: 'INCREASE_PURCHASEABLE_UNIT',
      payload: product.id,
    });
  };

  const handleReducePurchaseableUnit = () => {
    productDispatch({
      type: 'REDUCE_PURCHASEABLE_UNIT',
      payload: product.id,
    });
  };

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    navigate('/cart');
  };

  return (
    <div className="px-6 py-6 bg-[#fafafa] h-auto rounded-2xl text-black text-base/5 sm:text-2xl/7">
      <div className="text-deepBlue-100 text-bold mb-4">{product.name}</div>
      <div className="flex flex-col space-y-14">
        <div className="flex items-center">
          <Rating rating={product.rating} onClick={() => {}} />
          <div className="ml-2 sm:text-lg/5">{`${
            product.reviews?.length || 10
          } reviews `}</div>
        </div>
        <div className="sm:text-xl/6">{product.description}</div>
        <div className="flex flex-col space-y-7">
          <div className="flex justify-between max-w-xs font-bold items-center">
            <div>Quantity</div>
            <div className="flex space-x-2 items-center">
              <img src="/svg/check_icon.svg" alt="check" />
              {product.inStock ? <div>In stock</div> : <div>Out of stock</div>}
            </div>
          </div>
          <div className="flex justify-between space-x-5 font-bold">
            <div className="flex-1">
              <Button buttonStyle="text-lg/5 sm:text-2xl/7">{`${
                product.noOfUnitsToPurchase
              } unit${product.noOfUnitsToPurchase! > 1 ? 's' : ''}`}</Button>
            </div>
            <Button
              buttonStyle="w-[47px]"
              onclick={handleReducePurchaseableUnit}
              disabled={!product.noOfUnitsToPurchase}
            >
              <IconWrapper src="/svg/minus_icon.svg" alt="minus" iconStyle="" />
            </Button>
            <Button
              buttonStyle="w-[47px]"
              onclick={handleAddPurchaseableUnit}
              disabled={!product.noOfUnitsAvailable}
            >
              <IconWrapper src="/svg/add_icon.svg" alt="add" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between space-x-5 sm:space-x-11 text-bold">
          <Button
            buttonStyle="bg-deepBlue-100 w-full text-white"
            disabled={!product.noOfUnitsToPurchase}
            onclick={handleAddToCart}
          >
            Add to cart
          </Button>
          <Button
            buttonStyle="bg-yellow-500 w-full"
            disabled={!product.noOfUnitsToPurchase}
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionCard;

interface IconWrapperProps {
  src: string;
  alt?: string;
  iconStyle?: string;
}

const IconWrapper = ({ src, alt, iconStyle }: IconWrapperProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${iconStyle} max-w-[13px] max-h-3 sm:max-w-[24px] sm:max-h-6 `}
    />
  );
};
