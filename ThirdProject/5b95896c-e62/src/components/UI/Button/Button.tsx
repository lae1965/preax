import React from 'react'
import { Loader } from '..'
import { keyboardShortcut } from '../../../constants'
import { cn } from '../../../utils/classNames'

import styles from './button.module.css'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string
  className?: string
  alternativeKeyboardShortcut?: boolean
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className,
  alternativeKeyboardShortcut,
  isLoading,
  ...props
}) => {
  const { disabled } = props

  const buttonClass = cn(styles.button, className, isLoading ? styles.loading : '')
  const tooltipClass = cn(styles.tooltip, disabled ? styles.disabledTooltip : '')
  const shortcutClass = cn(styles.shortcut, disabled ? styles.disabledShortcut : '')

  return (
    <div className={styles.buttonContainer}>
      <button
        className={buttonClass}
        disabled={isLoading}
        aria-label={props['aria-label'] || text}
        {...props}
      >
        {isLoading ? <Loader /> : text}
      </button>
      {alternativeKeyboardShortcut && (
        <div className={styles.description}>
          <span className={tooltipClass}>или нажми </span>
          <span className={shortcutClass}>{keyboardShortcut()}</span>
        </div>
      )}
    </div>
  )
}
