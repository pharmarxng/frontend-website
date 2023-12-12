import { AlertActionType, CartActionType } from '../utils/interfaces';
import axios from '../axios/axios';

const orderSubUrl = '/api/v1/order';

export const getOrderByIdApi = async (
  id: string,
  alertDispatch: React.Dispatch<AlertActionType>,
  params?: Record<string, unknown>
) => {
  const url = `${orderSubUrl}/fetch-order/${id}`;
  try {
    const response = await axios.get(url, {
      params,
    });
    const responseData = response.data.data;
    console.log({ responseData });
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
    const response = await axios.post('/api/v1/order/create-order', body);
    if (response.data.statusCode !== 201) {
      throw new Error(response.data.message);
    }
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
