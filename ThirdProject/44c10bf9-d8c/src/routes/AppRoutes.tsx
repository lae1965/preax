import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Themes, NotFound } from '../pages'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<PublicRoute>
						<Home />
					</PublicRoute>
				}
			/>
			<Route
				path='/themes'
				element={
					<PrivateRoute>
						<Themes />
					</PrivateRoute>
				}
			/>
			<Route path='/not-found' element={<NotFound />} />
			<Route path='*' element={<Navigate to='/not-found' replace />} />
		</Routes>
	)
}

export default AppRoutes
