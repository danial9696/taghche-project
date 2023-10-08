// eslint-disable-next-line import/no-extraneous-dependencies
import createHttpError from 'http-errors';
import { NextApiRequest, NextApiResponse } from 'next/types';
import errorHandler from './error';
import { ApiMethodHandlers } from './types';

/**
 * The `apiHandler` function is a TypeScript function that handles API requests by checking the HTTP
 * method, validating the handler, and returning an appropriate response or error.
 * @param {ApiMethodHandlers} handler - The `handler` parameter is an object that contains methods for
 * handling different HTTP methods (GET, POST, PUT, DELETE, etc.) for a specific API endpoint. Each
 * method in the `handler` object should be a function that takes in the request (`req`) and response
 * (`res`) objects as
 * @returns The function `apiHandler` returns an asynchronous function that takes in a `req`
 * (NextApiRequest) and `res` (NextApiResponse<ErrorResponse>) as parameters.
 */
export default function apiHandler(handler: ApiMethodHandlers) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const method = req.method ? (req.method.toUpperCase() as keyof ApiMethodHandlers) : undefined;

      // * Check if handler supports current HTTP method
      if (!method) {
        throw new createHttpError.MethodNotAllowed(`No method specified on path ${req.url}!`);
      }

      const methodHandler = handler[method];
      if (!methodHandler) {
        return res
          .status(405)
          .json({ error: { message: `Method ${req.method} Not Allowed on path ${req.url}!` } });
      }

      if (typeof methodHandler === 'function') {
        methodHandler(req, res);
      } else {
        return res
          .status(405)
          .json({ error: { message: `Method ${req.method} Not Allowed on path ${req.url}!` } });
      }
    } catch (err: any) {
      // ! Global error handler
      if (createHttpError.isHttpError(err)) {
        console.error('Error of', err);

        return res.status(err.statusCode).json({ error: { message: err.message } });
      }

      errorHandler(err, res);
    }

    return null;
  };
}
