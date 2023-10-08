import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useQueryParams = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Extract query parameters from the URL
      const params = new URLSearchParams(url.split('?')[1]);

      // Your custom logic to handle the query parameters
      // For example, you can store them in state or perform any other actions
      // Here, we're just logging the query parameters to the console
      console.log(params.get('param1'));
      console.log(params.get('param2'));
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  // You can expose any other functions or data related to query parameters here
};

export default useQueryParams;
