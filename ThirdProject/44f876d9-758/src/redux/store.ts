import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import themesReducer from './slices/themesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    themes: themesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
