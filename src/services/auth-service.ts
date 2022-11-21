import { ILoginReq, ILoginRes, IRefreshTokenReq, IRefreshTokenRes, ILoginTwoFactorRes, ILoginTwoFactorReq } from 'interfaces/auth';
import { createApi } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';
import axiosBaseQuery from 'utils/axiosBaseQuery';

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: axiosBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    login: build.query<ILoginRes & ILoginTwoFactorRes, ILoginReq>({
      query: (params) => ({
        url: 'auth/login',
        method: 'POST',
        data: params,
      }),
      transformResponse: (data: ILoginRes & ILoginTwoFactorRes) => data,
    }),
    refreshToken: build.query<IRefreshTokenRes, IRefreshTokenReq>({
      query: (params) => ({
        url: 'auth/refresh',
        method: 'POST',
        data: params,
      }),
      transformResponse: (data: IRefreshTokenRes) => data,
    }),
    loginWithTwoFactor: build.query<ILoginRes, ILoginTwoFactorReq>({
      query: (params) => ({
        url: 'auth/login',
        method: 'PUT',
        data: params,
      }),
      transformResponse: (data: ILoginRes) => data,
    }),
  }),
});

export const { useLazyLoginQuery, useLazyLoginWithTwoFactorQuery, useLazyRefreshTokenQuery } = authService;
