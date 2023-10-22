import { useEffect } from 'react';
import { ProductState } from '../context/productContext';
import { getProductsApi } from '../api/products';

const ProductSearchBar = () => {
  // Todo make it that searching here takes us to product details page
  const {
    productState: { searchQuery },
    productDispatch,
  } = ProductState();

  useEffect(() => {
    const fetchData = async (params?: Record<string, unknown>) => {
      await getProductsApi(productDispatch, params);
    };
    fetchData({ search: searchQuery });
  }, [productDispatch, searchQuery]);

  return (
    <div
      className={`flex justify-between bg-white text-black w-full md:w-80 px-4 border-solid border-2`}
    >
      <input
        placeholder="Search for products"
        value={searchQuery}
        onChange={(e) =>
          productDispatch({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value,
          })
        }
        className="w-[85%] border-none focus:outline-none"
      />
      <div>
        <img src="/svg/search_icon.svg" alt="Search" />
      </div>
    </div>
  );
};

export default ProductSearchBar;
