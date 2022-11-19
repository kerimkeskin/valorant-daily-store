import { authService } from 'services/auth-service';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat([authService.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
