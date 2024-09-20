import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { logIn, actions as authActions } from './auth';
import { IUser } from '../../types';

const initialState: IUser = {
  id: null,
  name: null,
  password: null,
  quizzes: [],
  createdAt: null,
  updatedAt: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
        state.id = payload.id;
        state.name = payload.name;
        state.password = payload.password;
        state.quizzes = payload.quizzes;
        state.createdAt = payload.createdAt;
        state.updatedAt = payload.updatedAt;
      })
      .addCase(authActions.logout, (state) => {
        state.id = null;
        state.name = null;
        state.password = null;
        state.quizzes = [];
        state.createdAt = null;
        state.updatedAt = null;
      });
  },
});

const selectUser = (state: RootState) => state.user;

export const { actions } = userSlice;
export const selectors = { selectUser };
export default userSlice.reducer;
