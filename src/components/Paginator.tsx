import { useEffect, useState } from 'react';
import { scrollToTop } from '../utils/scrollToTop';

interface PaginatorProps {
  currentPage: number;
  pageLimit: number;
  maxPages: number;
  getPageApi: (obj: Record<string, unknown>) => Promise<void>;
  setLoading: (v: boolean) => void;
  objectParams?: Record<string, unknown> | undefined;
}
const Paginator = ({
  currentPage,
  pageLimit,
  maxPages,
  getPageApi,
  setLoading,
  objectParams = undefined,
}: PaginatorProps) => {
  const [paginationGroup, setPaginationGroup] = useState<number[]>([]);

  async function goToNextPage() {
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    // If search
    if (window.location.pathname === '/search') {
      Object.defineProperty(
        params,
        'search',
        Object.getOwnPropertyDescriptor(params, 'q')!
      );
      delete params['q'];
    }

    await getPageApi({
      ...params,
      ...objectParams,
      page: currentPage + 1,
      limit: 8,
    });
    setLoading(false);
  }

  async function goToPreviousPage() {
    setLoading(true);
    const params = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );
    // If search
    if (window.location.pathname === '/search') {
      Object.defineProperty(
        params,
        'search',
        Object.getOwnPropertyDescriptor(params, 'q')!
      );
      delete params['q'];
    }

    await getPageApi({
      ...params,
      ...objectParams,
      page: currentPage - 1,
      limit: 8,
    });
    setLoading(false);
  }

  async function changePage(event: React.MouseEvent<HTMLButtonElement>) {
    setLoading(true);
    const pageNumber = Number(event.currentTarget.textContent);

    const params = Object.fromEntries(
      new URLSearchParams(window.location.search)
    );

    // If search
    if (window.location.pathname === '/search' && params?.q) {
      Object.defineProperty(
        params,
        'search',
        Object.getOwnPropertyDescriptor(params, 'q')!
      );
      delete params['q'];
    } else if (window.location.pathname === '/category/' && params?.name) {
      Object.defineProperty(
        params,
        'category',
        Object.getOwnPropertyDescriptor(params, 'name')!
      );
      delete params['name'];
    }

    // delete
    delete params['q'];

    await getPageApi({
      ...params,
      ...objectParams,
      page: pageNumber,
      limit: 8,
    });
    setLoading(true);
    setLoading(false);
  }

  useEffect(() => {
    const getPaginationGroup = () => {
      const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
      setPaginationGroup(
        new Array(pageLimit >= maxPages ? maxPages : pageLimit)
          .fill(undefined)
          .map((_, idx) => start + idx + 1)
          .filter((e) => !isNaN(e))
      );
    };

    scrollToTop();
    getPaginationGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (paginationGroup.length > 0)
    return (
      <div className="flex pl-0 list-none rounded my-2 mb-10 justify-center">
        <button
          onClick={goToPreviousPage}
          className={`rounded-md text-temp-primary px-1.5 font-semibold shadow-none focus:outline-none ${
            currentPage === 1 && 'text-temp-gray-light'
          } ${currentPage === 1 ? 'disabled' : ''}`}
          disabled={currentPage === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={currentPage === 1 ? '#d1d1d1' : '#000000'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        {paginationGroup.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`w-8 h-8 mx-1 flex justify-center items-center rounded-full text-temp-primary font-semibold shadow-none focus:outline-none ${
              currentPage === item
                ? 'bg-temp-green-500 bg-gradient text-temp-white'
                : null
            }`}
            disabled={item > maxPages}
          >
            <span className="pt-1">{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`rounded-md text-temp-primary px-1.5 font-semibold shadow-none focus:outline-none ${
            currentPage >= maxPages && 'text-temp-gray-light'
          } ${currentPage === maxPages ? 'disabled' : ''}`}
          disabled={currentPage >= maxPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={currentPage >= maxPages ? '#d1d1d1' : '#000000'}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    );
  return <></>;
};

export default Paginator;
