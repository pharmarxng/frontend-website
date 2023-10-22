import { Link } from 'react-router-dom';
import { ProductState } from '../../context/productContext';
import { useEffect, useState } from 'react';
import { getCategoriesApi } from '../../api/products';
import { ICategory } from '../../utils/interfaces';
import FadeLoader from 'react-spinners/FadeLoader';

const Categories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    productDispatch,
    productState: { categories },
  } = ProductState();

  useEffect(() => {
    const fetchData = async (params?: unknown) => {
      setIsLoading(true);
      await getCategoriesApi(productDispatch, params);
      setIsLoading(false);
    };
    fetchData();
  }, [productDispatch]);

  const categoriesContent = categories.map((i: ICategory) => {
    return (
      <div key={i.id} className="flex flex-col items-center  mb-6 md:mb-12">
        <div className="h-36 md:h-64 w-full mb-3 md:mb-10">
          <img
            src={i.image}
            alt={i.name}
            className="object-cover h-full w-full"
          />
        </div>
        <Link
          to={`/category/${i.id}`}
          className="p-1 sm:p-2 mb-1 rounded bg-yellow-500 hover:bg-yellow-200 hover:shadow-lg hover:cursor-pointer"
        >
          {i.name}
        </Link>
      </div>
    );
  });
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <FadeLoader
            color={'#2D547B'}
            loading={isLoading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {!categories.length ? (
            <div className="flex justify-center text-black">
              No category found
            </div>
          ) : (
            <div className="flex flex-col items-center text-black py-5 sm:py-12">
              <div className="text-xl/6 sm:text-3xl/10 font-bold sm:font-normal whitespace-nowrap mb-5">
                Categories
              </div>
              <div className="text-sm sm:text-lg/5 mb-14">
                Discover over +4000 healthcare solutions to support your
                well-being in the Drug Store.
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 w-full">
                {categoriesContent}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Categories;
