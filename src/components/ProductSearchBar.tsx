import { PharmState } from '../context/context';

interface ProductSearchBarProps {
  searched?: (payload: string) => void;
}

const ProductSearchBar = ({ searched }: ProductSearchBarProps) => {
  const {
    productState: { searchQuery },
    productDispatch,
  } = PharmState();

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
        <img
          src="/svg/search_icon.svg"
          alt="Search"
          onClick={() => searched && searched(searchQuery)}
        />
      </div>
    </div>
  );
};

export default ProductSearchBar;
