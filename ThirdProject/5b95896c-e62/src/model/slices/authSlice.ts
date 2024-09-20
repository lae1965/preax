import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_API_URL

interface UserProps {
  id: number
  name: string
  password: string
  quizzes: null
  createdAt: string
  updatedAt: string
}

interface ApiError {
  message: string
  error: string
  statusCode: number
}

interface AuthState {
  user: UserProps | null
  loading: 'idle' | 'loading' | 'failed'
  error: ApiError | null
}

const initialState: AuthState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  loading: 'idle',
  error: null
}

interface ThunkArgs {
  name: string
  password: string
}

export const signInRequest = createAsyncThunk<UserProps, ThunkArgs, { rejectValue: ApiError }>(
  'auth',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/3-quiz/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      const data = await response.json()

      if (!response.ok) {
        return rejectWithValue(data)
      }

      return data?.user || data
    } catch (error) {
      return rejectWithValue({
        message: 'Неизвестная ошибка',
        error: 'Unknown Error',
        statusCode: 500
      })
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload
    },
    signOut: state => {
      state.user = null
      state.loading = 'idle'
      state.error = null
      localStorage.removeItem('name')
      localStorage.removeItem('user')
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signInRequest.pending, state => {
        state.loading = 'loading'
        state.error = null
      })
      .addCase(signInRequest.rejected, (state, { payload }) => {
        state.user = null
        state.loading = 'failed'
        state.error = payload as ApiError
      })
      .addCase(signInRequest.fulfilled, (state, { payload }) => {
        state.user = payload
        state.loading = 'idle'
        state.error = null
        localStorage.setItem('name', payload.name)
        localStorage.setItem('user', JSON.stringify(payload))
      })
  }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
