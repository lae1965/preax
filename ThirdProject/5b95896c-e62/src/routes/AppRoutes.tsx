import { Routes, Route, Navigate } from 'react-router-dom'
import { ROUTE_PATHS } from '../constants'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import { Home, Themes, NotFound, Layout, Main, Rating } from '../pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_PATHS.AUTH}
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.THEMES}
        element={
          <PrivateRoute>
            <Themes />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTE_PATHS.MAIN}
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Main />} />
        <Route path={ROUTE_PATHS.RAITING} element={<Rating />} />
      </Route>
      <Route path={ROUTE_PATHS.NOT_FOUND} element={<NotFound />} />
      <Route
        path={ROUTE_PATHS.WILDCARD}
        element={<Navigate to={ROUTE_PATHS.NOT_FOUND} replace />}
      />
    </Routes>
  )
}

export default AppRoutes
