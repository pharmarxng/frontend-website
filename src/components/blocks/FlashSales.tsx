import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import ProductCard from '../ProductCard';
import { IPagination, IProducts } from '../../utils/interfaces';
import { getFlashProductsApi } from '../../api/products';
import { AlertState } from '../../context/alertContext';
import Paginator from '@components/Paginator';

const FlashSales = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [pagination, setPagination] = useState<IPagination | null>(null);

  const { alertDispatch } = AlertState();
  const params = {
    sort: 'createdAt,-1',
    limit: 8,
  };

  useEffect(() => {
    fetchData(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertDispatch]);

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    const fetchedProducts = await getFlashProductsApi(alertDispatch, params);
    if (fetchedProducts.docs.length) {
      setProducts(fetchedProducts.docs);
      setPagination({
        hasNextPage: fetchedProducts.hasNextPage,
        hasPrevPage: fetchedProducts.hasPrevPage,
        limit: fetchedProducts.limit,
        nextPage: fetchedProducts.nextPage,
        page: fetchedProducts.page,
        pagingCounter: fetchedProducts.pagingCounter,
        prevPage: fetchedProducts.prevPage,
        totalDocs: fetchedProducts.totalDocs,
        totalPages: fetchedProducts.totalPages,
      } as IPagination);
    }
    setLoading(false);
  };

  const content =
    products &&
    products.map((prod: IProducts) => {
      return (
        <Link key={prod.id} to={`/product/${prod.id}`}>
          <ProductCard prod={prod} bare />
        </Link>
      );
    });

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10">
          <FadeLoader
            color={'#2D547B'}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          {products && (
            <div className="py-5 sm:py-12 text-black">
              <div className="text-xl/6 sm:text-3xl/10 font-bold sm:font-normal whitespace-nowrap mb-5">
                Flash Sales
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-4 justify-center md:grid-cols-4 mb-4">
                {content}
              </div>
              {pagination && (
                <Paginator
                  pageLimit={pagination.limit}
                  maxPages={pagination.totalPages}
                  currentPage={pagination.page}
                  getPageApi={fetchData}
                  setLoading={setLoading}
                  objectParams={params}
                />
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FlashSales;
