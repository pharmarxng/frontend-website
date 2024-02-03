import { AlertActionType } from '@utils/interfaces';
import axios from '../axios/axios';

const authSubUrl = '/api/v1/admin-auth';

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
