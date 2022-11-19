import { ILoginReq, ILoginRes } from './../interfaces/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    login: build.query<ILoginRes, ILoginReq>({
      query: (params) => ({
        url: 'auth/login',
        method: 'POST',
        body: params,
      }),
      transformResponse: (data: ILoginRes) => {
        return data;
      },
    }),
  }),
});

export const { useLazyLoginQuery } = authService;
