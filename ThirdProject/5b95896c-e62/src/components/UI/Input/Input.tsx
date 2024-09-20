import React, { useState } from 'react'
import { EyeIcon, EyeOffIcon, XCircleIcon } from '../..'
import { cn } from '../../../utils/classNames'
import { ERRORS } from '../../../constants'

import styles from './input.module.css'

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name?: string
  label: string
  hint?: string
  error?: string
  type?: string
  onClear?: () => void
}

export const Input: React.FC<InputProps> = ({
  label,
  hint,
  name,
  error,
  type = 'text',
  onClear,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const inputClasses = cn(styles.input, {
    [styles.inputPassword]: type === 'password',
    [styles.borderSuccess]: error === ERRORS.VALID_NAME_EXISTS,
    [styles.borderError]: !!error && error !== ERRORS.VALID_NAME_EXISTS
  })

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : type}
          className={inputClasses}
          {...props}
        />
        {props.value && (
          <div className={styles.controlButtons}>
            <button
              type='button'
              onClick={onClear}
              aria-label='Очистить поле'
              className={styles.iconButton}
            >
              <XCircleIcon />
            </button>
            {type === 'password' && (
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                className={styles.iconButton}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            )}
          </div>
        )}
      </div>
      {error && (
        <span
          className={cn(styles.error, {
            [styles.success]: error === ERRORS.VALID_NAME_EXISTS
          })}
        >
          {error}
        </span>
      )}
      {hint && <p className={styles.inputDescription}>{hint}</p>}
    </div>
  )
}
