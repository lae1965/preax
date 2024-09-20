import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeysPress, useThemes } from '../../hooks'

import { Button, Loader, Logo, ThemeList } from '../../components'

import styles from './Themes.module.css'

export const Themes: React.FC = () => {
  const navigate = useNavigate()
  const { fetchThemes, themes, selectedThemes, themesStatus, themesError, allThemesSelected } =
    useThemes()

  useEffect(() => {
    fetchThemes()
  }, [])

  const handleCompleteSelection = () => {
    if (allThemesSelected) {
      navigate('/main')
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  useKeysPress(handleCompleteSelection, allThemesSelected)

  return (
    <div className={styles.container}>
      {themesStatus === 'loading' && <Loader />}

      {themesStatus !== 'loading' && (
        <div className={styles.wrapper}>
          <Logo to={'/themes'} className={styles.logo} tabIndex={-1} />
          <h1 className={styles.title}>
            Выбери <span>интересующие</span> темы
          </h1>

          {themesError && (
            <div className={styles.placeholder}>
              <div className={styles.error}>Error: {themesError}</div>
            </div>
          )}

          {!themesError && <ThemeList themes={themes} selectedThemes={selectedThemes} />}

          <Button
            text='Продолжить'
            type='button'
            alternativeKeyboardShortcut={true}
            disabled={!allThemesSelected}
            onClick={handleCompleteSelection}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  )
}
