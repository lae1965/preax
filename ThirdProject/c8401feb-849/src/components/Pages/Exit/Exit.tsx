import React from 'react'
import Button from '../../Button/Button'
import { Navigate, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../../store/slice'
import { useAppSelector } from '../../../store/hooks'
import { isAuth } from '../../../store/selectors'

interface ExitProps extends React.HTMLAttributes<HTMLElement> {}
const Exit: React.FC<ExitProps> = () => {
	const navigate = useNavigate()

	if (!useAppSelector(isAuth)) return <Navigate to='/' replace />

	const dispatch = useDispatch()

	const handleClick = () => {
		localStorage.clear()
		dispatch(userSlice.actions.setUser({ id: 0, name: '', password: '' }))
		navigate('/')
	}

	return <Button title='Выйти' width='113px' onClick={handleClick} />
}

export default Exit
