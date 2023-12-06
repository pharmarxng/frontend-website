import axios from '../axios/axios';

const authSubUrl = '/api/v1/auth';

export const logInApi = async (body: Record<string, unknown>) => {
  const url = `${authSubUrl}/process/login`;
  try {
    const response = await axios.post(url, body);
    const responseData = response.data.data;
    return responseData;
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};

export const signUpApi = async (body: Record<string, unknown>) => {
  const url = `${authSubUrl}/process/signup`;
  try {
    const response = await axios.post(url, body);
    const responseData = response.data.data;
    return responseData;
  } catch (error) {
    console.log(error);
    // alertDispatch(alertActions.error(error.response?.data.message));
  }
};
