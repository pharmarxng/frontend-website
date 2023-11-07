import axios from 'axios';
// import store from 'store2';
const baseURL = import.meta.env.VITE_REACT_APP_API_URL;

const instance = axios.create({ baseURL });

// instance.interceptors.request.use(
//   (config) => {
//     const token = store.get('temp_access_token');
//     if (token) config.headers['Authorization'] = `${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// const successHandler = (response: AxiosResponse<unknown, unknown>) => {
//   return response;
// };

// const errorHandler = (error: AxiosError<unknown, unknown>) => {
//   const storage = configureStore();
//   const status = error.response!.status;
//   if (status === 401) {
//     // store.clearAll();
//     storage.dispatch(alertActions.error('Error'));
//     triggerError(history);
//   }
//   return Promise.reject(error);
// };

// instance.interceptors.response.use(
//   (response) => successHandler(response),
//   (error) => errorHandler(error)
// );

export default instance;
