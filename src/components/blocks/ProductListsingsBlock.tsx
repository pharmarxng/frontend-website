import { useEffect } from 'react';
import { ProductState } from '../../context/productContext';
import { IProducts } from '../../utils/interfaces';
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import { getProductsApi, getSingleCategorysApi } from '../../api/products';
import Paginator from '../Paginator';

interface ProductListsingsBlockProps {
  categoryId: string;
}

const ProductListsingsBlock = ({ categoryId }: ProductListsingsBlockProps) => {
  const {
    productDispatch,
    productState: { category, products, pagination },
  } = ProductState();

  const fetchData = async (params?: Record<string, unknown>) => {
    console.log('It is inside fetchData');
    await getProductsApi(productDispatch, params);
    console.log('It has run the api call');
  };

  useEffect(() => {
    const fetchCategory = async (categoryId: string) => {
      await getSingleCategorysApi(productDispatch, categoryId);
    };
    fetchCategory(categoryId);
  }, [productDispatch, categoryId]);

  const content = products.map((prod: IProducts) => {
    return (
      <Link key={prod.id} to={`/product/${prod.id}`}>
        <ProductCard prod={prod} />
      </Link>
    );
  });

  console.log({ pagination });

  return (
    <div className="text-black">
      <div className="text-2xl/7 sm:text-4xl md:text-header">
        {category?.name}
      </div>
      <div className="sm:flex justify-between text-sm/4 sm:text-midbase">
        <div>{`Showing 1 - 20 of ${pagination.totalDocs} products`}</div>
        <div>{`Sort by: Alphabetically, A-Z`}</div>
      </div>
      {products ? (
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 ">
            {content}
          </div>
          <Paginator
            pageLimit={pagination?.limit}
            maxPages={pagination?.totalPages}
            currentPage={pagination?.page}
            getPageApi={fetchData}
            // setLoading={setItemLoading}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductListsingsBlock;

// <div>
// <Paginator
//   currentPage={currentPage}
//   pageLimit={productsPerPage}
//   maxPages={Math.ceil(foundProducts.length / productsPerPage)}
//   getPageApi={(obj) => {
//     // Handle the API call to get the data for the new page here
//     // Update the state accordingly
//     // Example: fetchItem(obj).then((data) => { /* Update state */ });
//   }}
//   setLoading={(v) => {
//     // Update the loading state in your component
//   }}
// />
// </div>
