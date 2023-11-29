import axios from '../axios/axios';
import { CartActionType, ProductActionType } from '../utils/interfaces';

const productSubUrl = '/api/v1/product';
const categorySubUrl = '/api/v1/category';
const orderSubUrl = '/api/v1/order';

export const getProductsApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  params?: Record<string, unknown>
) => {
  const url = productSubUrl + '/get-all';
  params = { ...params, limit: 8 };
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_PRODUCTS',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const getProductByIdApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  productId: string
) => {
  const url = `${productSubUrl}/${productId}`;
  try {
    const response = await axios.get(url);
    const responseData = response.data.data;

    dispatch({
      type: 'GET_SINGLE_PRODUCT',
      payload: responseData,
    });

    dispatch({
      type: 'SET_RECENT_PRODUCTS',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const getTrendingProductsApi = async (
  dispatch: React.Dispatch<ProductActionType>
) => {
  const url = productSubUrl + '/get-trending-products';
  try {
    const response = await axios.get(url);
    const responseData = response.data.data;

    dispatch({
      type: 'GET_TRENDING_PRODUCTS',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const getCategoriesApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  params?: Record<string, unknown>
) => {
  const url = categorySubUrl + '/get-all';
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_CATEGORIES',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const getSingleCategorysApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  categoryId: string,
  params?: Record<string, unknown>
) => {
  const url = `${categorySubUrl}/${categoryId}`;
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_SINGLE_CATEGORY',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const getStandardDeliveryFeesApi = async (
  dispatch: React.Dispatch<CartActionType>,
  params?: Record<string, unknown>
) => {
  const url = `${orderSubUrl}/get-delivery-fees`;
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data;

    dispatch({
      type: 'SET_SHIPPING_LIST',
      payload: responseData,
    });
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};
