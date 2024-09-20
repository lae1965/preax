import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ScreenTheme {
	isLight: boolean;
}

const initialState: ScreenTheme = {
	isLight: true,
};

export const screenThemeSlice = createSlice({
	name: 'screenTheme',
	initialState,
	reducers: {
		toggleScreenTheme: (state) => {
			state.isLight = !state.isLight;
		},
		setScreenTheme: (state, action: PayloadAction<boolean>) => {
			state.isLight = action.payload;
		},
	},
});

export const { toggleScreenTheme, setScreenTheme } = screenThemeSlice.actions;
export default screenThemeSlice.reducer;
