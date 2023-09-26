import { useState } from 'react';
import { PharmState } from '../../context/context';
import { categoriesList } from '../../utils/constants';
import { IProducts } from '../../utils/interfaces';
import ProductCard from '../ProductCard';

interface ProductListsingsBlockProps {
  categoryId: string;
}

const ProductListsingsBlock = ({ categoryId }: ProductListsingsBlockProps) => {
  const {
    state: { products },
  } = PharmState();
  // const [pagination, setPagination] = useState({});
  const [currentPage] = useState(1);
  const [productsPerPage] = useState(3);

  console.log({ products });
  const category = categoriesList.find((i) => i.id === categoryId);

  const foundProducts = products.filter(
    (i: IProducts) => i.categoryId === categoryId
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = foundProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const content = currentProducts.map((prod: IProducts) => {
    return <ProductCard prod={prod} />;
  });

  return (
    <div className="text-black">
      <div className="text-2xl/7 sm:text-4xl md:text-header">
        {category?.name}
      </div>
      <div className="sm:flex justify-between text-sm/4 sm:text-midbase">
        <div>{`Showing 1 - 20 of 50 products`}</div>
        <div>{`Sort by: Alphabetically, A-Z`}</div>
      </div>
      {foundProducts ? (
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 ">
            {content}
          </div>
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
