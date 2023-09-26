import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div className="text-black border-grey-200 border flex w-full sm:w-[65%]">
      <div>
        <img
          src="/svg/search_icon.svg"
          alt="Search"
          // onClick={() => searched && searched(searchQuery)}
        />
      </div>
      <input
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="focus:outline-none text-base/5 sm:text-midbase"
      />
    </div>
  );
};

export default SearchBar;
