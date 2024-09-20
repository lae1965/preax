import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks'
import { ROUTE_PATHS } from '../constants'

interface PublicRouteProps {
  children: React.ReactElement
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuth()

  return !user ? children : <Navigate to={ROUTE_PATHS.THEMES} />
}

export default PublicRoute
