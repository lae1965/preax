import { configureStore } from '@reduxjs/toolkit';
import { userReducer, authReducer, themeReducer } from './slices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
