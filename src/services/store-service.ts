import { IStoreRes, IStoreReq, ISkinRes, ISkinReq } from './../interfaces/store';
import { IWalletRes, IWalletReq } from 'interfaces/store';
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
    getDailyStore: build.query<IStoreRes, IStoreReq>({
      query: ({ params, language }) => ({
        url: 'store/current',
        method: 'POST',
        headers: {
          language,
        },
        body: params,
      }),
      transformResponse: (data: IStoreRes) => data,
    }),
    getAllSkins: build.query<ISkinRes, ISkinReq>({
      query: ({ params, language }) => ({
        url: 'store/offers',
        method: 'POST',
        headers: {
          language,
        },
        body: params,
      }),
      transformResponse: (data: ISkinRes) => data,
    }),
  }),
});

export const { useGetWalletBalanceQuery, useGetDailyStoreQuery, useGetAllSkinsQuery } = storeService;
