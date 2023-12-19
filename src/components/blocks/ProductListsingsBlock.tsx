import { useEffect, useState } from 'react';
import { ProductState } from '../../context/productContext';
import { IProducts } from '../../utils/interfaces';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { getProductsApi, getSingleCategorysApi } from '../../api/products';
import Paginator from '../Paginator';
import FadeLoader from 'react-spinners/FadeLoader';
import Dropdown from '../Dropdown';
import { productListingDropdownOptions } from '../../utils/constants';
import { AlertState } from '../../context/alertContext';
// import { PATH } from '../../utils/path-constant';

interface ProductListsingsBlockProps {
  categoryId?: string;
  searchQuery?: string;
}

const ProductListsingsBlock = ({
  categoryId,
  searchQuery,
}: ProductListsingsBlockProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [order, setOrder] = useState<string>(productListingDropdownOptions[0]);

  const {
    productDispatch,
    productState: { category, products, pagination },
  } = ProductState();
  const { alertDispatch } = AlertState();

  useEffect(() => {
    fetchData({
      search: searchQuery ? searchQuery : null,
      sort: getSortParam(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, order]);

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    await getProductsApi(productDispatch, alertDispatch, params);
    setLoading(false);
  };

  useEffect(() => {
    const fetchCategory = async (categoryId: string) => {
      await getSingleCategorysApi(productDispatch, alertDispatch, categoryId);
    };
    fetchCategory(categoryId!);
  }, [productDispatch, alertDispatch, categoryId]);

  const content = products.map((prod: IProducts) => {
    return (
      <Link key={prod.id} to={`/product/${prod.id}`}>
        <ProductCard prod={prod} />
      </Link>
    );
  });

  const calculateStartIndex = () => {
    return (pagination.page - 1) * pagination.limit + 1;
  };

  const calculateEndIndex = () => {
    const endIndex = pagination.page * pagination.limit;
    return endIndex > pagination.totalDocs ? pagination.totalDocs : endIndex;
  };

  const handleOrderChange = (selectedOrder: string) => {
    setOrder(selectedOrder);
  };

  const getSortParam = () => {
    return order === productListingDropdownOptions[0] ? 'name,1' : 'name,-1';
  };

  return (
    <div className="text-black">
      {categoryId && (
        <div className="text-2xl/7 sm:text-4xl md:text-header text-deepBlue-100 mb-5 md:mb-8 mt-2 md:mt-5">
          {category?.name}
        </div>
      )}
      {category?.description && (
        <div className="text-sm/4 sm:text-midbase mb-5 md:mb-8">
          {category?.description}
        </div>
      )}
      <div className="sm:flex justify-between text-sm/4 sm:text-midbase mb-5 md:mb-8 space-y-4 sm:space-y-0">
        <div>
          {`Showing ${calculateStartIndex()} - ${calculateEndIndex()} of `}
          <span className="font-bold">{`${pagination.totalDocs} products`}</span>
        </div>
        <div>
          {`Sort by: `}
          <Dropdown
            options={productListingDropdownOptions}
            selectedValue={order}
            onChange={handleOrderChange}
          />
        </div>
      </div>
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
          {products.length ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 justify-center md:justify-between md:gap-5 md:grid-cols-4">
              {content}
            </div>
          ) : (
            <div className="text-sm/4 sm:text-midbase flex justify-center">
              No products found
            </div>
          )}
          <Paginator
            pageLimit={pagination?.limit}
            maxPages={pagination?.totalPages}
            currentPage={pagination?.page}
            getPageApi={fetchData}
            setLoading={setLoading}
          />
        </div>
      )}
    </div>
  );
};

export default ProductListsingsBlock;
