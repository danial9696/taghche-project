import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import service from 'src/api';
import { HTTP_METHODS } from 'src/constants/api';

/**
 * The `useApi` function is a custom hook in TypeScript that handles API requests and returns the data,
 * error, and loading state.
 * @param {string} url - The `url` parameter is a string that represents the endpoint URL for the API
 * request.
 * @param {'post' | 'get' | 'put' | 'delete'} method - The `method` parameter is a string that
 * specifies the HTTP method to be used for the API request. It can have one of the following values:
 * 'post', 'get', 'put', or 'delete'.
 * @param {any} [refetch] - The `refetch` parameter is an optional parameter that can be used to
 * trigger a refetch of the API data. It can be any value, and when it changes, the `useEffect` hook
 * will be triggered again, causing the API data to be fetched again. This can be useful in
 * @param {AxiosRequestConfig} [config] - The `config` parameter is an optional object that allows you
 * to customize the Axios request configuration. It can include properties such as headers, query
 * parameters, request body, etc. You can refer to the Axios documentation for more details on the
 * available options for the `config` object.
 * @returns The function `useApi` returns an object with three properties: `data`, `error`, and
 * `loading`.
 */
const useApi = <T>(
  url: string,
  method: 'post' | 'get' | 'put' | 'delete',
  refetch?: any,
  config?: AxiosRequestConfig,
) => {
  if (!url.length) {
    throw new Error(`Url must be defined`);
  }

  if (!Object.values(HTTP_METHODS).some(item => item === method)) {
    throw new Error('Invalid HTTP method, please use a valid one');
  }

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response: AxiosResponse<T> = await service[method](url, config);

        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [refetch]);

  return { data, error, loading };
};

export default useApi;
