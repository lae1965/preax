import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import themesImages from '@/utils/themesImages';
import { ThemeData } from '@/types';

export interface ThemesState {
  data: ThemeData[] | null;
  loading: boolean;
  error?: string | null;
}

const initialState: ThemesState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchThemes = createAsyncThunk<
  ThemeData[],
  undefined,
  { rejectValue: string }
>('themes/fetch', async (_, { rejectWithValue }) => {
  const res = await fetch(import.meta.env.VITE_API_URL + '/3-quiz/themes');

  if (!res.ok) {
    return rejectWithValue('Что-то пошло не так...');
  }

  const data = await res.json();
  return (data as ThemeData[]).map((item) => ({
    ...item,
    background: {
      ...item.background,
      light: themesImages[item.name],
    },
  }));
});

export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchThemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchThemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default themesSlice.reducer;
