import { FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
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
      className={`flex justify-between items-center h-auto bg-white text-black w-full px-4 py-1 border-solid border-2 border-yellow-500 rounded-3xl`}
      onSubmit={handleFormSubmit}
    >
      <div
        onClick={handleSearchSubmit}
        className="h-8 w-8 md:w-10 md:h-10 flex items-center"
      >
        <FaSearch className="md:w-6 md:h-6 flex items-center" />
      </div>
      <input
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[95%] border-none focus:outline-none dark:text-black dark:bg-white placeholder:text-sm text-sm sm:placeholder:text-base sm:text-base md:placeholder:text-xl md:text-xl placeholder:items-center"
      />
    </form>
  );
};

export default ProductSearchBar;
