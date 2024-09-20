import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../model/store'
import { getThemes, select, deselect, reset, Theme } from '../model/slices/themesSlice'

export const useThemes = () => {
  const dispatch = useAppDispatch()
  const themes = useAppSelector(state => state.themes.themes)
  const selectedThemes = useAppSelector(state => state.themes.selectedThemes)
  const themesStatus = useAppSelector(state => state.themes.status)
  const themesError = useAppSelector(state => state.themes.error)
  const allThemesSelected = selectedThemes.every(theme => theme !== null)

  const fetchThemes = useCallback(() => {
    dispatch(getThemes())
  }, [dispatch])

  const selectTheme = useCallback(
    (theme: Theme) => {
      dispatch(select(theme))
    },
    [dispatch]
  )

  const deselectTheme = useCallback(
    (theme: Theme) => {
      dispatch(deselect(theme))
    },
    [dispatch]
  )

  const resetThemes = useCallback(() => {
    dispatch(reset())
  }, [dispatch])

  return {
    themes,
    selectedThemes,
    themesStatus,
    themesError,
    allThemesSelected,
    fetchThemes,
    selectTheme,
    deselectTheme,
    resetThemes
  }
}
