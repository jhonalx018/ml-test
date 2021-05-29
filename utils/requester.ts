import axios, { AxiosRequestConfig } from 'axios';

interface IEAxiosGet {
  url: string;
  config: AxiosRequestConfig
}

export default ({
  url, config,
}: IEAxiosGet) => axios.get(url, config);

axios.interceptors.response.use((response) => response, (error) => {
  // eslint-disable-next-line no-console
  console.error('Error in request interceptor', error);

  throw error;
});
