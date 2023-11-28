import { FormEvent, useState } from 'react';
import { ProductState } from '../context/productContext';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../utils/path-constant';

const SearchBar = () => {
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
      className="text-black border-grey-200 border flex w-full sm:w-[65%]"
      onSubmit={handleFormSubmit}
    >
      <div onClick={handleSearchSubmit}>
        <img src="/svg/search_icon.svg" alt="Search" />
      </div>
      <input
        placeholder="Search Products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:outline-none text-base/5 sm:text-midbase"
      />
    </form>
  );
};

export default SearchBar;
