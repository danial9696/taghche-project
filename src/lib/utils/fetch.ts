import { AxiosRequestConfig, AxiosResponse } from 'axios';
import service from 'src/api/service';

// Axios utility function to make HTTP requests
const fetchApi = async <T>(
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  config: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await service[method](url, config);

    // TODO: Must change result to data
    // @ts-ignore
    return response.result;
  } catch (error: any) {
    // Handle error
    throw new Error(error.message);
  }
};

export default fetchApi;
