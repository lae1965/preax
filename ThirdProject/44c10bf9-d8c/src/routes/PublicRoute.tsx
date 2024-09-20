import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../model/store'
import { getUser } from '../model/selectors'

interface PublicRouteProps {
	children: React.ReactElement
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
	const user = useAppSelector(getUser)
	return !user ? children : <Navigate to='/themes' />
}

export default PublicRoute
