import { FilterIcon } from '@assets/svg';
import { PlusYellowIcon } from '@assets/svg';
import { EditYellowIcon } from '@assets/svg';
import { ReactNode, useEffect, useState } from 'react';
import { AdminState } from '@context/adminContext';
import { getAdminCategoriesApi, getAdminProducts } from '@api/admin';
import { AlertState } from '@context/alertContext';
import { ICategory, IModal, IProducts } from '@utils/interfaces';
import Paginator from '@components/Paginator';
import FadeLoader from 'react-spinners/FadeLoader';
import { useModalContext } from '@context/modalContext';
import { AddOrEditProduct } from '@components/ModalGroup/content';
import { getItem } from '@utils/auth';

const Products = () => {
  const {
    adminState: {
      products,
      categories,
      productPagination,
      category,
      productSearchQuery,
      adminToken,
    },
    adminDispatch,
  } = AdminState();
  const { alertDispatch } = AlertState();
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState({});
  const { setContent, setIsOpenModal } = useModalContext() as IModal;

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categories.length) {
      adminDispatch({
        type: 'GET_SINGLE_CATEGORY',
        payload: categories[0],
      });

      setParams({
        categoryId: categories[0].id,
      });

      fetchProducts({ categoryId: categories[0].id, limit: 8 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const fetchCategories = async (params?: Record<string, unknown>) => {
    await getAdminCategoriesApi(adminDispatch, alertDispatch, params);
  };

  const fetchProducts = async (params?: Record<string, unknown>) => {
    setLoading(true);
    const result = await getAdminProducts(adminDispatch, alertDispatch, params);
    setLoading(false);
    return result;
  };

  useEffect(() => {
    if (productSearchQuery && productSearchQuery.length) {
      fetchProducts({ search: productSearchQuery, limit: 8 });
    }
    setParams({
      search: productSearchQuery,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearchQuery]);

  const handleCategoryChange = async (category: ICategory) => {
    adminDispatch({
      type: 'CLEAR_FILTERS',
    });

    adminDispatch({
      type: 'GET_SINGLE_CATEGORY',
      payload: category,
    });

    setParams({
      categoryId: category.id,
    });

    await fetchProducts({
      categoryId: category.id,
      limit: 8,
    });
  };

  const showModal = (content: ReactNode): void => {
    setIsOpenModal(true);
    setContent(content);
  };

  const renderdContent = categories.map((i: ICategory) => {
    return (
      <nav
        onClick={() => handleCategoryChange(i)}
        className={`text-sm h-[51px] p-2.5 font-semibold hover:text-secondary-300 hover:border-b-8 hover:border-secondary-300 hover:cursor-pointer whitespace-nowrap ${category && category.id === i.id ? 'border-secondary-300 border-b-8 text-secondary-300' : ''}`}
        key={i.id}
      >
        {i.name}
      </nav>
    );
  });

  const renderedCardContent = products.map((prod: IProducts) => {
    return (
      <div
        onClick={() => showModal(<AddOrEditProduct prod={prod} />)}
        key={prod.id}
        className="bg-secondary-300 rounded-lg text-sm text-center flex flex-col justify-between"
      >
        <div className="p-[10px] flex flex-col items-center">
          <div className="max-w-[300px] pt-3 h-[160px]">
            <img
              src={prod.image}
              alt=""
              className=" rounded-lg shadow-lg object-cover h-full"
            />
          </div>
          <div className="text-white mt-2">{prod.name}</div>
          <div className="flex gap-2 justify-center text-gray-400">
            <div>&#x20A6; {prod.price}</div>
            <div>.</div>
            <div>{prod.noOfUnitsAvailable} pieces</div>
          </div>
        </div>

        <button className="flex justify-center items-center gap-2 bg-grey-400 w-full bg-opacity-25 h-[52px] text-yellow-300 font-bold hover:bg-opacity-40">
          <EditYellowIcon /> Edit Product
        </button>
      </div>
    );
  });

  return (
    <div className="text-black w-full p-8 bg-grey-200">
      <div className="flex items-center justify-between w-full">
        <div className="font-bold">Products Management</div>
        <input
          type="search"
          name="productSearchBar"
          value={productSearchQuery}
          onChange={(e) => {
            adminDispatch({
              type: 'FILTER_PRODUCTS_BY_SEARCH',
              payload: e.target.value,
            });
          }}
          placeholder="Search"
          className="flex justify-center gap-2 bg-white p-3.5 rounded-lg  min-w-[350px]"
        />
        <button className="flex justify-center gap-2 bg-white p-3.5 rounded-lg w-64">
          <FilterIcon />
          Manage Categories
        </button>
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
          <div className="grid gap-[1px] grid-rows-[50px,1fr] bg-white my-2 px-7">
            <nav className="flex justify-between border-b-4 overflow-x-auto">
              {renderdContent}
            </nav>
            <div className="py-9 grid grid-cols-4 grid-flow-row gap-y-4 gap-x-9 border-b-4 max-h-[550px] overflow-y-scroll">
              <div
                onClick={() => showModal(<AddOrEditProduct />)}
                className="bg-secondary-300 rounded-lg flex flex-col items-center justify-center"
              >
                <PlusYellowIcon />
                <div className="text-yellow-300 font-bold hover:opacity-30 text-center">
                  Add new product
                </div>
              </div>
              {renderedCardContent}
            </div>
          </div>
          <Paginator
            pageLimit={productPagination?.limit}
            maxPages={productPagination?.totalPages}
            currentPage={productPagination?.page}
            getPageApi={fetchProducts}
            setLoading={setLoading}
            objectParams={params}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
