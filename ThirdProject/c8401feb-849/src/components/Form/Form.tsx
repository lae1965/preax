import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import styles from './Form.module.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { login } from '../../store/actionCreators'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getUser } from '../../store/selectors'

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = () => {
	const [name, setName] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const dispatch = useAppDispatch()
	const user = useAppSelector(getUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (user.id) {
			localStorage.setItem('name', user.name)
			navigate('/themes')
		}
	}, [user])

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		try {
			await dispatch(login({ name, password }))
		} catch (e) {
			console.log(
				(e as { response: { data: { message: string } } }).response?.data
					?.message
			)
			return
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.inputs}>
				<Input
					type='text'
					id='name'
					name='name'
					value={name}
					onChange={e => setName(e.target.value)}
					label='Имя'
					hint='Имя должно начинаться с заглавной буквы, содержать 2-30 символов, без пробелов.'
					autoComplete='off'
					tabIndex={1}
					aria-label='Input your name'
					required
				/>
				<Input
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					label='Пароль'
					hint='Пароль должен содержать 8-30 символов, без пробелов. Минимум 2 цифры и 3 заглавные буквы.'
					autoComplete='off'
					tabIndex={2}
					aria-label='Input password'
					required
				/>
			</div>
			<Button
				type='submit'
				title='Начать'
				tabIndex={3}
				aria-label='Click to start'
			/>
		</form>
	)
}

export default Form
