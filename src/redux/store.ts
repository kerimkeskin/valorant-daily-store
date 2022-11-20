import { storeService } from './../services/store-service';
import { authService } from 'services/auth-service';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([authService.middleware], [storeService.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
