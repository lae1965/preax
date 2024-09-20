import { RootState } from './store'

export const getUser = (state: RootState) => state.auth.user
export const getIsError = (state: RootState) => !!state.auth.error
export const getIsLoading = (state: RootState) =>
	state.auth.loading === 'loading'
