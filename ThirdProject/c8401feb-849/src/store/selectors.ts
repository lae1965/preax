import type { RootState } from './index'

export const getUser = (state: RootState) => state.userReduser.user
export const isAuth = (state: RootState) => !!state.userReduser.user.id
