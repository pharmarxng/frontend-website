import { AdminActionType, AlertActionType } from '@utils/interfaces';
import axios from '../axios/axios';
import { getItem } from '@utils/auth';

const authSubUrl = '/api/v1/admin-auth';
const adminSubUrl = '/api/v1/admin';

const adminAuth = getItem('adminAuth');

export const adminLogInApi = async (
  body: Record<string, unknown>,
  alertDispatch: React.Dispatch<AlertActionType>
) => {
  const url = `${authSubUrl}/login`;
  try {
    const response = await axios.post(url, body);
    const responseData = response.data.data;
    return responseData;
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

export const getAdminOrders = async (
  dispatch: React.Dispatch<AdminActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  const url = `${adminSubUrl}/fetch-all-orders`;
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${adminAuth.accessToken}`,
      },
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_ORDERS',
      payload: responseData,
    });
    return responseData;

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

export const getOrderByIdApi = async (
  id: string,
  dispatch: React.Dispatch<AdminActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  dispatch({
    type: 'CLEAR_ORDER',
  });
  const url = `${adminSubUrl}/fetch-order/${id}`;
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${adminAuth.accessToken}`,
      },
    });
    const responseData = response.data.data;
    dispatch({
      type: 'GET_SINGLE_ORDER',
      payload: responseData,
    });
    return responseData;
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

export const confirmOrderByIdApi = async (
  { id, confirm }: { id: string; confirm?: boolean },
  dispatch: React.Dispatch<AdminActionType>,
  alertDispatch: React.Dispatch<AlertActionType>
) => {
  try {
    dispatch({
      type: 'CLEAR_ORDER',
    });
    const url = `${adminSubUrl}/confirm-order/${id}`;
    const response = await axios.post(
      url,
      {
        confirm: confirm ? true : false,
      },
      {
        headers: {
          Authorization: `Bearer ${adminAuth.accessToken}`,
        },
      }
    );
    const responseData = response.data.data;
    dispatch({
      type: 'GET_SINGLE_ORDER',
      payload: responseData,
    });
    return responseData;
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

export const getAdminProducts = async (
  dispatch: React.Dispatch<AdminActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  const url = `${adminSubUrl}/get-products`;
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${adminAuth.accessToken}`,
      },
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_PRODUCTS',
      payload: responseData,
    });
    return responseData;

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

export const getAdminCategoriesApi = async (
  dispatch: React.Dispatch<AdminActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  const url = `${adminSubUrl}/get-all-categories`;
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${adminAuth.accessToken}`,
      },
    });
    const responseData = response.data.data;

    dispatch({
      type: 'GET_CATEGORIES',
      payload: responseData,
    });

    return responseData;

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
