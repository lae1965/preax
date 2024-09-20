import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';
import { FormInputValidation, ILoginData, IUser } from '../../types';
import { RootState } from '..';

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (loginData: ILoginData, { rejectWithValue }) => {
    try {
      const user = await api.logIn(loginData);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// сейчас это string | null, но может в дальнейшем что-то иное будет
type authData = string | null;

type IAuth = {
  authData: authData;
  validationData: FormInputValidation;
  loadingProcess: boolean;
  loadingError: boolean;
};

const initialState: IAuth = {
  authData: null,
  validationData: {
    messageName: '',
    messagePassword: '',
    statusName: 'blocked',
    statusPassword: 'blocked',
  },
  loadingProcess: false,
  loadingError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<authData>) => {
      state.authData = payload;
    },
    updateValidation: (
      state,
      { payload }: PayloadAction<FormInputValidation>
    ) => {
      state.validationData = payload;
    },
    logout: (state) => {
      state.authData = null;
      localStorage.removeItem('name');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loadingError = false;
        state.loadingProcess = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.authData = payload.name;
        state.loadingProcess = false;
        localStorage.setItem('name', payload.name!);
      })
      .addCase(logIn.rejected, (state) => {
        state.loadingProcess = false;
        state.loadingError = true;
      });
  },
});

const selectAuthData = (state: RootState) => state.auth.authData;

export const { updateValidation } = authSlice.actions;
export const { actions } = authSlice;
export const selectors = { selectAuthData };
export default authSlice.reducer;
