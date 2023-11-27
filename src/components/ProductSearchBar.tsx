import { FormEvent, useState } from 'react';

import { ProductState } from '../context/productContext';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path-constant';

const ProductSearchBar = () => {
  const { productDispatch } = ProductState();
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    productDispatch({
      type: 'FILTER_BY_SEARCH',
      payload: query,
    });

    navigate(`${PATH.SEARCH}/${query}`);
  };

  return (
    <form
      className={`flex justify-between bg-white text-black w-full md:w-80 px-4 border-solid border-2`}
      onSubmit={handleSearchSubmit}
    >
      <input
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[85%] border-none focus:outline-none"
      />
      <div>
        <img src="/svg/search_icon.svg" alt="Search" />
      </div>
    </form>
  );
};

export default ProductSearchBar;
