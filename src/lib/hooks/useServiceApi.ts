import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

function useServiceApi<T>(promiseOrAsyncFn: Promise<T> | (() => Promise<T>), refetch?: any) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // * If the input is a function, invoke it to get the promise
        const promise =
          typeof promiseOrAsyncFn === 'function' ? promiseOrAsyncFn() : promiseOrAsyncFn;

        const response = (await promise) as AxiosResponse;

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
}

export default useServiceApi;
