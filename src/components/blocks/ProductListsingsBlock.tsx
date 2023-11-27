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
  const {
    productDispatch,
    productState: { category, products, pagination, sort },
  } = ProductState();

  useEffect(() => {
    fetchData({ search: searchQuery ? searchQuery : null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (params?: Record<string, unknown>) => {
    setLoading(true);
    await getProductsApi(productDispatch, params);
    setLoading(false);
  };

  useEffect(() => {
    const fetchCategory = async (categoryId: string) => {
      await getSingleCategorysApi(productDispatch, categoryId);
    };
    fetchCategory(categoryId!);
  }, [productDispatch, categoryId]);

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

  //  Todo work on the dropdown

  return (
    <div className="text-black">
      {categoryId && (
        <div className="text-2xl/7 sm:text-4xl md:text-header">
          {category?.name}
        </div>
      )}
      <div className="sm:flex justify-between text-sm/4 sm:text-midbase">
        <div>
          {`Showing ${calculateStartIndex()} - ${calculateEndIndex()} of `}
          <span className="font-bold">{`${pagination.totalDocs} products`}</span>
        </div>
        <div>
          {`Sort by: `}
          <Dropdown
            options={productListingDropdownOptions}
            selectedOption={sort}
            onSelect={() => {}}
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 justify-center md:justify-between md:gap-5 md:grid-cols-4 ">
            {content}
          </div>
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
