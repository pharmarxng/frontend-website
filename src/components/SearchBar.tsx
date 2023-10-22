import { useEffect } from 'react';
import { getProductsApi } from '../api/products';
import { ProductState } from '../context/productContext';

const SearchBar = () => {
  const {
    productState: { searchQuery },
    productDispatch,
  } = ProductState();

  useEffect(() => {
    const fetchData = async (params?: unknown) => {
      await getProductsApi(productDispatch, params);
    };
    fetchData({ search: searchQuery });
  }, [productDispatch, searchQuery]);

  return (
    <div className="text-black border-grey-200 border flex w-full sm:w-[65%]">
      <div>
        <img src="/svg/search_icon.svg" alt="Search" />
      </div>
      <input
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e) =>
          productDispatch({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value,
          })
        }
        className="focus:outline-none text-base/5 sm:text-midbase"
      />
    </div>
  );
};

export default SearchBar;
