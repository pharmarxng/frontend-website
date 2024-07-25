import {
  AlertActionType,
  CartActionType,
  IOrder,
  IOrderDeliveryFees,
  IUser,
  OrderActionType,
} from '../utils/interfaces';
import axios from '../axios/axios';
import { getItem } from '@utils/auth';

const orderSubUrl = '/api/v1/order';

const userAuth = getItem('auth');

export const getOrdersApi = async (
  dispatch: React.Dispatch<OrderActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  alertDispatch({ type: 'ALERT_CLEAR' });
  const url = orderSubUrl + '/fetch-all-orders';
  params = { ...params, limit: 4 };
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${userAuth.accessToken}`,
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
  dispatch: React.Dispatch<OrderActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  dispatch({
    type: 'CLEAR_ORDER',
  });
  alertDispatch({ type: 'ALERT_CLEAR' });
  const url = `${orderSubUrl}/fetch-order/${id}`;
  try {
    const response = await axios.get(url, {
      params,
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

export const getStandardDeliveryFeesApi = async (
  dispatch: React.Dispatch<CartActionType>,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  alertDispatch({ type: 'ALERT_CLEAR' });
  const url = `${orderSubUrl}/get-delivery-fees`;
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data as IOrderDeliveryFees[];

    dispatch({
      type: 'SET_SHIPPING_LIST',
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

export const createOrderApi = async (
  body: Record<string, unknown>,
  alertDispatch: React.Dispatch<AlertActionType>
) => {
  try {
    alertDispatch({ type: 'ALERT_CLEAR' });
    const response = await axios.post('/api/v1/order/create-order', body);
    if (response.data.statusCode !== 201) {
      throw new Error(response.data.message);
    }
    return response.data.data as {
      order: IOrder;
      user: IUser;
      accessToken: string;
    };
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
