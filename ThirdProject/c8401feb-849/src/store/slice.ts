import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { login } from './actionCreators'

export interface IUser {
	id: number
	name: string
	password: string
	quizzes?: unknown | null // TODO изменить тип объекта когда станут известны его свойства
	createdAt?: Date
	updatedAt?: Date
}

export interface UserState {
	user: IUser
	isLoading: boolean
	error: { errorMessage: string } | string | undefined
}

const initialState: UserState = {
	user: {
		id: 0,
		name: '',
		password: ''
	},
	isLoading: false,
	error: ''
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isLoading = false
				state.error = ''
				state.user = action.payload
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(
				login.rejected,
				(
					state,
					action: PayloadAction<{ errorMessage: string } | undefined>
				) => {
					state.isLoading = false
					state.error = action.payload
				}
			)
	}
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
