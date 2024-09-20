import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import themesSlice from './slices/themes';
import screenThemeSlice from './slices/screenTheme';

const rootReducer = combineReducers({
	user: userSlice,
	themes: themesSlice,
	screenTheme: screenThemeSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
