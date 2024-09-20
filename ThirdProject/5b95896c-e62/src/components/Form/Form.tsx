import React, { FormEvent, useState } from 'react'
import { useAuth, useKeysPress } from '../../hooks'

import { validateField } from '../../utils/validate'
import { Button, Input } from '..'

import { INPUT_REQUIREMENTS, ERRORS } from '../../constants'

import formIllustration from '/formIllustration.png'
import styles from './form.module.css'

interface IForm
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Form = ({ ...props }: IForm) => {
  const { signIn, isAuthLoading } = useAuth()
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const isFormFilled = name !== '' && password !== ''

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    const isNameValid = validateField('name', name)
    const isPasswordValid = validateField('password', password)
    setNameError(isNameValid ? '' : ERRORS.INVALID_NAME)
    setPasswordError(isPasswordValid ? '' : ERRORS.INVALID_PASSWORD)

    if (isNameValid && isPasswordValid) {
      signIn(name, password)
        .unwrap()
        .catch(error => {
          const errorMessage: string = error.message || ERRORS.UNKNOWN_ERROR
          switch (error?.statusCode) {
            case 401:
              setNameError(ERRORS.VALID_NAME_EXISTS)
              setPasswordError(ERRORS.INVALID_RESPONSE_PASSWORD)
              break
            case 404:
              setNameError(ERRORS.ERROR_404)
              setPasswordError(ERRORS.ERROR_404)
              break
            case 500:
              setNameError(ERRORS.UNKNOWN_ERROR)
              setPasswordError(ERRORS.UNKNOWN_ERROR)
              break
            default:
              setNameError(errorMessage)
              setPasswordError(errorMessage)
          }
        })
    }
  }

  useKeysPress(handleSubmit, isFormFilled && !isAuthLoading)

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value)
      if (setter === setName) setNameError('')
      if (setter === setPassword) setPasswordError('')
    }

  const handleInputClear = (setter: React.Dispatch<React.SetStateAction<string>>) => () => {
    if (isAuthLoading) {
      return
    }
    setter('')
    if (setter === setName) setNameError('')
    if (setter === setPassword) setPasswordError('')
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formAuth} aria-label='Форма входа' {...props}>
      <img className={styles.formImg} src={formIllustration} alt='Иллюстрация' />
      <h1 className={styles.formTitle}>Добро пожаловать!</h1>
      <div className={styles.inputs}>
        <Input
          value={name}
          error={nameError}
          onChange={handleInputChange(setName)}
          onClear={handleInputClear(setName)}
          onKeyDown={handleInputKeyDown}
          hint={INPUT_REQUIREMENTS.NAME}
          autoComplete='off'
          label='Имя'
          aria-label='Input your name'
        />
        <Input
          type='password'
          value={password}
          error={passwordError}
          onChange={handleInputChange(setPassword)}
          onClear={handleInputClear(setPassword)}
          onKeyDown={handleInputKeyDown}
          hint={INPUT_REQUIREMENTS.PASSWORD}
          label='Пароль'
          aria-label='Input password'
        />
      </div>
      <Button
        type='submit'
        text='Начать'
        className={styles.btnForm}
        isLoading={isAuthLoading}
        disabled={!isFormFilled || isAuthLoading}
        alternativeKeyboardShortcut={true}
      />
    </form>
  )
}
