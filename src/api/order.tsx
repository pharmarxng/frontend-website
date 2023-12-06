import { CartActionType } from '../utils/interfaces';
import axios from '../axios/axios';

const orderSubUrl = '/api/v1/order';

export const getOrderByIdApi = async (
  id: string,
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

export const createOrderApi = async (body: Record<string, unknown>) => {
  try {
    const response = await axios.post('/api/v1/order/create-order', body);
    if (response.data.statusCode !== 201) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
