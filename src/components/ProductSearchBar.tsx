import { FormEvent, useState } from 'react';

import { ProductState } from '../context/productContext';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path-constant';

const ProductSearchBar = () => {
  const { productDispatch } = ProductState();
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchProducts();
  };

  const handleSearchSubmit = () => {
    searchProducts();
  };

  const searchProducts = () => {
    productDispatch({
      type: 'FILTER_BY_SEARCH',
      payload: query,
    });
    if (query.length > 0) navigate(`${PATH.SEARCH}/${query}`);
  };

  return (
    <form
      className={`flex justify-between items-center h-auto bg-white text-black w-full md:w-auto px-4 border-solid border-2`}
      onSubmit={handleFormSubmit}
    >
      <input
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[85%] border-none focus:outline-none dark:text-black dark:bg-white placeholder:text-sm sm:placeholder:text-base md:placeholder:text-xl placeholder:items-center"
      />

      <img
        onClick={handleSearchSubmit}
        src="/svg/search_icon.svg"
        alt="Search"
        className="h-8 w-8 md:w-10 md:h-10 items-center"
      />
    </form>
  );
};

export default ProductSearchBar;
