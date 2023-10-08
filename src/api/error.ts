/* eslint-disable no-console */
import createHttpError from 'http-errors';
import { NextApiResponse } from 'next/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ZodError } from 'zod';
import { ErrorResponse } from './types';
import { isCustomError, isValidationError } from './utils';

export default function errorHandler(err: unknown, res: NextApiResponse<ErrorResponse>) {
  if (createHttpError.isHttpError(err) && err.expose) {
    // * Handle all errors thrown by http-errors module
    return res.status(err.statusCode).json({ error: { message: err.message } });
  }

  if (err instanceof ZodError && isValidationError(err)) {
    // * Handle zod validation errors
    return res.status(400).json({ error: { message: err.message } });
  }

  if (isValidationError(err)) {
    // * Handle other validation errors (if needed)
    return res.status(400).json({ error: { message: err.errors.join(', ') } });
  }

  if (isCustomError(err)) {
    // * Handle specific custom errors (if needed)
    return res.status(403).json({ error: { message: err.message } });
  }

  // ? Add more conditions to handle other specific error scenarios if necessary

  // * Default 500 server error
  console.error('An error occurred:', err);

  return res.status(500).json({
    error: { message: 'Internal Server Error', err },
    status: createHttpError.isHttpError(err) ? err.statusCode : 500,
  });
}
