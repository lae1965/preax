import { createSlice } from '@reduxjs/toolkit';
import type { TTheme } from '../../types/theme';

interface IInitialState {
  themes: TTheme[];
  limit: boolean;
}

const initialState: IInitialState = {
  themes: [],
  limit: false,
};

const themes = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    addTheme(state, action) {
      state.themes.push(action.payload);
      state.limit = state.themes.length === 3 && state.themes.length < 4;
    },
    removeTheme(state, action) {
      state.themes = state.themes.filter((item) => item.id !== action.payload);
      state.limit = false;
    },
    clearThemes(state) {
      state.themes = [];
      state.limit = false;
    },
  },
});

export const { addTheme, removeTheme, clearThemes } = themes.actions;
export { themes };
export default themes.reducer;
