import { IDailyEmailReq, IReminderReq, IReminderRes } from 'interfaces/reminder';
import { createApi } from '@reduxjs/toolkit/query/react';
import { apiConfig } from 'constants/api-config';
import axiosBaseQuery from 'utils/axiosBaseQuery';

export const reminderService = createApi({
  reducerPath: 'reminderService',
  baseQuery: axiosBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    reminder: build.query<IReminderRes, IReminderReq>({
      query: (params) => ({
        url: 'reminder/add',
        method: 'POST',
        data: params,
      }),
      transformResponse: (data: IReminderRes) => data,
    }),
    dailyEmail: build.query<IReminderRes, IDailyEmailReq>({
      query: (params) => ({
        url: 'mail/register',
        method: 'POST',
        data: params,
      }),
      transformResponse: (data: IReminderRes) => data,
    }),
  }),
});

export const { useLazyReminderQuery, useLazyDailyEmailQuery } = reminderService;
