import { IStoreRes, IStoreReq, ISkinRes, ISkinReq } from './../interfaces/store';
import { IWalletRes, IWalletReq } from 'interfaces/store';
import { createApi } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';
import axiosBaseQuery from 'utils/axiosBaseQuery';

export const storeService = createApi({
  reducerPath: 'storeService',
  baseQuery: axiosBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    getWalletBalance: build.query<IWalletRes, IWalletReq>({
      query: (params) => ({
        url: 'store/wallet',
        method: 'POST',
        body: params,
      }),
      transformResponse: (data: IWalletRes) => data,
    }),
    getDailyStore: build.query<IStoreRes[], IStoreReq>({
      query: ({ language }) => ({
        url: 'store/current',
        method: 'POST',
        headers: {
          language,
        },
      }),
      transformResponse: (data: IStoreRes[]) => data,
    }),
    getAllSkins: build.query<ISkinRes, ISkinReq>({
      query: ({ language }) => ({
        url: 'contents/skinLevels',
        method: 'GET',
        params: {
          language,
          for_alert: true,
        },
      }),
      transformResponse: (data: ISkinRes) => data,
    }),
  }),
});

export const { useGetWalletBalanceQuery, useGetDailyStoreQuery, useGetAllSkinsQuery } = storeService;
