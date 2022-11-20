import { ILoginTwoFactorRes, ILoginTwoFactorReq } from './../interfaces/auth';
import { ILoginReq, ILoginRes, IRefreshTokenReq, IRefreshTokenRes } from 'interfaces/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    login: build.query<ILoginRes | ILoginTwoFactorRes, ILoginReq>({
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
    loginWithTwoFactor: build.query<ILoginRes, ILoginTwoFactorReq>({
      query: (params) => ({
        url: 'auth/login',
        method: 'PUT',
        body: params,
      }),
      transformResponse: (data: ILoginRes) => data,
    }),
  }),
});

export const { useLazyLoginQuery, useLazyLoginWithTwoFactorQuery, useLazyRefreshTokenQuery } = authService;
