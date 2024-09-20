import React, { useEffect, useState } from 'react'
import { Button, Input } from '..'
import { Spinner } from '../UI/Spinner/Spinner'
import { useAppDispatch, useAppSelector } from '../../model/store'
import { signInRequest } from '../../model/slices/authSlice'
import formIllustration from '/formIllustration.svg'
import { validate } from '../../utils/validate'
import {
	nameHint,
	passwordHint,
	nameRegExp,
	passwordRegExp,
	passwordIsMissing,
	userAlreadyExist,
	nameEnterError,
	passwordEnterError
} from '../../utils/constants'
import styles from './form.module.css'
import { getIsError, getIsLoading } from '../../model/selectors'
import { useIsPressEnter } from '../../hooks/useIsPressEnter'

interface IForm extends React.HTMLAttributes<HTMLFormElement> {}
export interface ErrorObject {
	message?: string
	color?: string
}

const orange = '#df4c25'
const green = '#2a8f55'

export const Form = ({ ...props }: IForm) => {
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [nameError, setNameError] = useState<ErrorObject>({})
	const [passwordError, setPasswordError] = useState<ErrorObject>({})
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const fetchError = useAppSelector(getIsError)
	const isLoadingStatus = useAppSelector(getIsLoading)
	const isPressAltEnter = useIsPressEnter()

	const dispatch = useAppDispatch()

	useEffect(() => {
		if (fetchError) {
			if (fetchError) {
				setNameError({
					message: userAlreadyExist,
					color: green
				})
				setPasswordError({
					message: passwordIsMissing,
					color: orange
				})
			} else {
				setNameError({})
				setPasswordError({})
			}
		}
	}, [fetchError])

	useEffect(() => {
		if (isLoadingStatus) {
			setIsLoading(true)
		} else {
			setTimeout(() => {
				setIsLoading(false)
			}, 300)
		}
	}, [isLoadingStatus])

	const handleClick = async () => {
		let wasError = false

		if (!validate(name, nameRegExp)) {
			setNameError({
				message: nameEnterError,
				color: orange
			})
			wasError = true
		}
		if (!validate(password, passwordRegExp)) {
			setPasswordError({
				message: passwordEnterError,
				color: orange
			})
			wasError = true
		}

		if (wasError) return

		await dispatch(signInRequest({ name, password }))
	}

	useEffect(() => {
		if (isPressAltEnter && name !== '' && password !== '') {
			handleClick()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPressAltEnter])

	return (
		<form className={styles.formAuth} {...props}>
			<img className={styles.formImg} src={formIllustration} alt='' />
			<h1 className={styles.formTitle}>Добро пожаловать!</h1>
			<div className={styles.inputs}>
				<Input
					value={name}
					onChange={e => {
						setName(e.target.value)
						setNameError({})
						if (fetchError) setPasswordError({})
					}}
					clearvalue={() => {
						setName('')
						setNameError({})
						if (fetchError) setPasswordError({})
					}}
					label='Имя'
					error={nameError}
					hint={nameHint}
					autoComplete='off'
					aria-label='Input your name'
				/>
				<Input
					inputType='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value)
						setPasswordError({})
						if (fetchError) setNameError({})
					}}
					clearvalue={() => {
						setPassword('')
						setPasswordError({})
						if (fetchError) setNameError({})
					}}
					label='Пароль'
					error={passwordError}
					hint={passwordHint}
					autoComplete='off'
					aria-label='Input password'
				/>
			</div>
			<Button
				type='button'
				className={styles.btnForm}
				disabled={name === '' || password === '' || isLoading}
				alternativeKeyboarShortcut={true}
				onClick={handleClick}
			>
				{(isLoading && <Spinner />) || 'Начать'}
			</Button>
		</form>
	)
}
