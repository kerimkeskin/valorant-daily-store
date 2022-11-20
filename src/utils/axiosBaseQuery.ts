import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import axios, { AxiosRequestConfig } from 'axios';

export const axiosRequest = async (baseUrl: string, { url, method, data, params, headers }: AxiosRequestConfig) => {
  try {
    const { data: response } = await axios({
      url: baseUrl + url,
      method,
      data: {
        ...data,
      },
      params,
      headers,
    });

    return { data: response };
  } catch (err: any) {
    throw {
      error: {
        status: err.response?.status,
        message: err.response?.data?.description,
      },
    };
  }
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async (args) => {
    return axiosRequest(baseUrl, {
      ...args,
    }).catch((error) => {
      return error;
    });
  };

export default axiosBaseQuery;
