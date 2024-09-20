import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_API_URL

interface UserProps {
	id: number
	name: string
	password: string
	quizzes: null
	createdAt: string
	updatedAt: string
}

interface AuthState {
	user: UserProps | null
	loading: 'idle' | 'loading' | 'failed'
	error: string
}

const initialState: AuthState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user')!)
		: null,
	loading: 'idle',
	error: ''
}

interface ThunkArgs {
	name: string
	password: string
}

export const signInRequest = createAsyncThunk<
	UserProps,
	ThunkArgs,
	{ rejectValue: string }
>('auth/login', async (userData, { rejectWithValue }) => {
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
			return rejectWithValue(data.message || 'Произошла неизвестная ошибка')
		}

		return data?.user || data
	} catch (error) {
		return rejectWithValue('Ошибка сети')
	}
})

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<UserProps>) => {
			state.user = action.payload
		},
		signOut: state => {
			state.user = null
			state.loading = 'idle'
			state.error = ''
			localStorage.removeItem('name')
			localStorage.removeItem('user')
		}
	},
	extraReducers: builder => {
		builder
			.addCase(signInRequest.pending, state => {
				state.loading = 'loading'
				state.error = ''
			})
			.addCase(signInRequest.rejected, (state, action) => {
				state.user = null
				state.loading = 'failed'
				state.error = action.payload || 'Ошибка входа'
			})
			.addCase(signInRequest.fulfilled, (state, action) => {
				state.user = action.payload
				state.loading = 'idle'
				state.error = ''
				localStorage.setItem('name', action.payload.name)
				localStorage.setItem('user', JSON.stringify(action.payload))
			})
	}
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
