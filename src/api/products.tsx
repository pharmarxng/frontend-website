import axios from '../axios/axios';
import { AlertActionType, ProductActionType } from '../utils/interfaces';

const productSubUrl = '/api/v1/product';
const categorySubUrl = '/api/v1/category';

export const getProductsApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: error.response.data.message,
      });
    } else {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: 'An error occurred.',
      });
    }
  }
};

export const getProductByIdApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
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

    console.log({responseData})

    dispatch({
      type: 'SET_RECENT_PRODUCTS',
      payload: responseData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: error.response.data.message,
      });
    } else {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: 'An error occurred.',
      });
    }
  }
};

export const getTrendingProductsApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  alertDispatch: React.Dispatch<AlertActionType>
) => {
  const url = productSubUrl + '/get-trending-products';
  try {
    const response = await axios.get(url);
    const responseData = response.data.data;

    dispatch({
      type: 'GET_TRENDING_PRODUCTS',
      payload: responseData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: error.response.data.message,
      });
    } else {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: 'An error occurred.',
      });
    }
  }
};

export const getFlashProductsApi = async (
  alertDispatch: React.Dispatch<AlertActionType>
) => {
  const url = productSubUrl + '/get-flash-products';
  try {
    const response = await axios.get(url);
    return response.data.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: error.response.data.message,
      });
    } else {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: 'An error occurred.',
      });
    }
  }
};

export const getCategoriesApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: error.response.data.message,
      });
    } else {
      alertDispatch({
        type: 'ALERT_ERROR',
        payload: 'An error occurred.',
      });
    }
  }
};

export const getSingleCategorysApi = async (
  dispatch: React.Dispatch<ProductActionType>,
  _alertDispatch: React.Dispatch<AlertActionType>,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // if (error.response) {
    //   alertDispatch({
    //     type: 'ALERT_ERROR',
    //     payload: error.response.data.message,
    //   });
    // } else {
    //   alertDispatch({
    //     type: 'ALERT_ERROR',
    //     payload: 'An error occurred.',
    //   });
    // }
  }
};
