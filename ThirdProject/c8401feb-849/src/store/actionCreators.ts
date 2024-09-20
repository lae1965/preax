import { createAsyncThunk } from '@reduxjs/toolkit'
import type { IUser } from './slice'

type ThunkArgs = { name: string; password: string }
type ThunkApiConfig = { rejectValue: { errorMessage: string } }

export const login = createAsyncThunk<IUser, ThunkArgs, ThunkApiConfig>(
	'user/login',
	async (userData, thunkAPI) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/3-quiz/auth`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(userData)
				}
			)

			const normalizeResponse = await response.json()

			if (!response.ok) return thunkAPI.rejectWithValue(normalizeResponse)

			return 'user' in normalizeResponse
				? normalizeResponse.user
				: normalizeResponse
		} catch (e) {
			return thunkAPI.rejectWithValue(
				(e as { errorMessage: string }) || 'Что-то пошло не так'
			)
		}
	}
)
