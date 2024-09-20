import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../types';
import { RootState } from '..';

const initialState: Theme[] = [];

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemes: (state, { payload }: PayloadAction<Theme[]>) => {
      for (let i = 0; i < payload.length; i++) state[i] = payload[i];
    },
    clearThemes: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = [];
      localStorage.removeItem('quizzes');
    },
  },
});

const getIsThemesSelected = (state: RootState) => !!state.theme.length;

export const { actions } = themeSlice;
export const selectors = { getIsThemesSelected };
export default themeSlice.reducer;
