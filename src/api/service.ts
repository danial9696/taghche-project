import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Sentry from './sentry';
import { ServiceType } from './types';
import { getBaseUrl } from './utils';

export const apiService: AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

const service: ServiceType = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.get(url, config);

      return response.data;
    } catch (error: any) {
      return error;
    }
  },
  post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.post(url, data, config);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.message}`);
        throw new Error(`Response error: ${error.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else if (error.message) {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      } else {
        return error;
      }
    }
  },
  put: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.put(url, data, config);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.delete(url, config);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
};

export default service;
