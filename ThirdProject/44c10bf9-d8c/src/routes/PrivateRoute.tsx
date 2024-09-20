import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../model/store'
import { getUser } from '../model/selectors'

interface PrivateRouteProps {
	children: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const user = useAppSelector(getUser)
	return user ? children : <Navigate to='/' />
}

export default PrivateRoute
