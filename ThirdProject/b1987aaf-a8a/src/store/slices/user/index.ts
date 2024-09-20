import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserData } from '@/types';

interface Params {
  name: string;
  password: string;
}

export interface UserState {
  data: UserData | null;
  loading: boolean;
  error?: string | null;
  themes: number[] | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
  themes: null,
};

export const login = createAsyncThunk<
  UserData,
  Params,
  { rejectValue: string }
>('user/login', async (params, { rejectWithValue }) => {
  const res = await fetch(import.meta.env.VITE_API_URL + '/3-quiz/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  const data = await res.json();

  if (data.message) {
    return rejectWithValue(data.message);
  }

  return (data?.user || data) as UserData;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.error = null;
      state.themes = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    setThemes: (state, action: PayloadAction<number[]>) => {
      state.themes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setThemes } = userSlice.actions;
export default userSlice.reducer;
