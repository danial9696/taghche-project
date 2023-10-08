import { AxiosRequestConfig, Method } from 'axios';
import { NextApiHandler } from 'next/types';

export type ServiceType = {
  get: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, data: any, config?: AxiosRequestConfig) => Promise<T>;
  put: <T>(url: string, data: any, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
};

// * Shape of the response when an error is thrown
export interface ErrorResponse {
  error: {
    message: string;
    err?: any; // Sent for unhandled errors resulting in 500
  };
  status?: number; // Sent for unhandled errors resulting in 500
}

export type ApiMethodHandlers = {
  [key in Uppercase<Method>]?: NextApiHandler;
};

// * Custom error class
export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}
