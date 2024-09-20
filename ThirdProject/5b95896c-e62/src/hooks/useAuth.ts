import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../model/store'
import { signInRequest, signOut } from '../model/slices/authSlice'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.user)
  const authError = useAppSelector(state => state.auth.error)
  const isAuthLoading = useAppSelector(state => state.auth.loading === 'loading')

  const signIn = useCallback(
    (name: string, password: string) => {
      return dispatch(signInRequest({ name, password }))
    },
    [dispatch]
  )

  const signOutUser = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  return {
    user,
    authError,
    isAuthLoading,
    signIn,
    signOut: signOutUser
  }
}
