import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks'
import { ROUTE_PATHS } from '../constants'

interface PrivateRouteProps {
  children: React.ReactElement
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth()

  return user ? children : <Navigate to={ROUTE_PATHS.AUTH} />
}

export default PrivateRoute
