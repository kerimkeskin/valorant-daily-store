import { ILoginReq, ILoginRes, IRefreshTokenReq, IRefreshTokenRes } from 'interfaces/auth';
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
      transformResponse: (data: ILoginRes) => data,
    }),
    refreshToken: build.query<IRefreshTokenRes, IRefreshTokenReq>({
      query: (params) => ({
        url: 'auth/refresh',
        method: 'POST',
        body: params,
      }),
      transformResponse: (data: IRefreshTokenRes) => data,
    }),
  }),
});

export const { useLazyLoginQuery } = authService;
