import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useAllQueryParams = () => {
  const nextRouter = useRouter();
  const { query, isReady } = nextRouter;
  const [queryParams, setQueryParams] = useState(query);

  useEffect(() => {
    if (isReady) {
      setQueryParams(query);
    }
  }, [isReady]);

  return queryParams;
};
export default useAllQueryParams;
