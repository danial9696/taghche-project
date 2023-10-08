/* eslint-disable import/prefer-default-export */
import { NextRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export const addQueryParams = (router: NextRouter, params: { [key: string]: string }): void => {
  const queryParams = new URLSearchParams(router.asPath.split('?')[1]);

  // * Create a copy of the existing query parameters
  const currentParams = new URLSearchParams(queryParams.toString());

  Object.keys(params).forEach((key: string) => {
    if (params[key]) {
      currentParams.set(key, params[key]);
    } else {
      currentParams.delete(key);
    }
  });

  const query: ParsedUrlQueryInput = Object.fromEntries(currentParams.entries());

  const path = {
    pathname: router.pathname,
    query,
  };

  router.push(path, undefined, { shallow: true });
};
