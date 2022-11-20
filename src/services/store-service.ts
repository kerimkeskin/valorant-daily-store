import { IWalletRes, IWalletReq } from './../interfaces/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';

export const storeService = createApi({
  reducerPath: 'storeService',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    getWalletBalance: build.query<IWalletRes, IWalletReq>({
      query: (params) => ({
        url: 'store/wallet',
        method: 'POST',
        body: params,
      }),
      transformResponse: (data: IWalletRes) => data,
    }),
  }),
});

export const { useGetWalletBalanceQuery } = storeService;
