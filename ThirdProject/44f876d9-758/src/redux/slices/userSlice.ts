import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, RESOURCES } from '../../constants';

interface IBody {
  name: string;
  password: string;
}

interface IUser {
  user?: IUser;
  id: number;
  name: string;
  password: string;
  quizzes: string[];
  createdAt: string;
  updatedAt: string;
}

interface IError {
  message: string;
  error: string;
  statusCode: number;
}

interface IUserState {
  data: {
    id: number;
    name: string;
    password: string;
    quizzes: string[];
    createdAt: string;
    updatedAt: string;
  };
  error: IError | null;
  status: 'resolved' | 'rejected' | 'pending' | 'idle';
}

const initialState: IUserState = {
  data: {
    id: 0,
    name: '',
    password: '',
    quizzes: [],
    createdAt: '',
    updatedAt: '',
  },
  error: null,
  status: 'idle',
};

const login = createAsyncThunk(
  'user/login',
  async function (body: IBody, { rejectWithValue }) {
    try {
      const response = await fetch(`${API_URL}${RESOURCES.AUTH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const err: IError = await response.json();
        return rejectWithValue(err);
      }

      const data: IUser = await response.json();
      return data?.user || data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = null;
        state.status = 'pending';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'resolved';

        state.data = action.payload;
        localStorage.setItem('name', state.data.name);
        sessionStorage.setItem('name', state.data.name);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload as IError;
      });
  },
});

export const { setError, setStatus, setUserData } = user.actions;
export { login, user };
export default user.reducer;
