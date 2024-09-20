import React from 'react'
import { useThemes } from '../../hooks/useThemes'
import { Theme } from '../../model/slices/themesSlice'
import { cn } from '../../utils/classNames'

import { CheckCircle } from '..'

import styles from './ThemeItem.module.css'

interface ThemeItemProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  theme: Theme
  isSelected: boolean
}

export const ThemeItem: React.FC<ThemeItemProps> = ({ theme, isSelected }) => {
  const { selectTheme, deselectTheme, allThemesSelected } = useThemes()

  const toggleSelection = () => {
    !isSelected ? selectTheme(theme) : deselectTheme(theme)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((event.altKey && event.key === 'Enter') || (event.metaKey && event.key === 'Enter')) {
      event.preventDefault()
    }
  }

  const ariaLabel = !isSelected ? `Выбрать тему ${theme.name}` : `Не выбирать тему ${theme.name}`

  return (
    <li
      className={cn(styles.item, {
        [styles.selected]: isSelected,
        [styles.notSelected]: !isSelected && allThemesSelected
      })}
    >
      <button
        className={`${styles.button} ${isSelected ? styles.selected : ''}`}
        onClick={toggleSelection}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
      >
        <img className={styles.bg} src={`/themes/${theme.name}.png`} alt={theme.name} />
        <p className={styles.title}>
          {theme.name}
          {isSelected && <CheckCircle className={styles.icon} />}
        </p>
      </button>
    </li>
  )
}
