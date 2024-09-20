import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReduser from './slice'

const rootReducer = combineReducers({ userReduser })

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
