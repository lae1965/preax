import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import themesReducer from './slices/themesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    themes: themesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
