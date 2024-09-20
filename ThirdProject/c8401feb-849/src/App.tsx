import React, { useEffect } from 'react'
import { Navigate, Routes } from 'react-router'
import { Route } from 'react-router-dom'

import styles from './App.module.css'
import Welcome from './components/Pages/Welcome/Welcome'
import Exit from './components/Pages/Exit/Exit'
import NotFound from './components/Pages/NotFound/NotFound'

interface AppProps extends React.HTMLAttributes<HTMLDivElement> {}
const App: React.FC<AppProps> = () => {
	useEffect(() => {
		if (!sessionStorage.getItem('was_saved')) {
			localStorage.clear()
			sessionStorage.setItem('was_saved', '1')
		}
	}, [])
	return (
		<div className={styles.container}>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/themes' element={<Exit />} />
				<Route path='/not-found' element={<NotFound />} />
				<Route path='*' element={<Navigate to='/not-found' replace />} />
			</Routes>
		</div>
	)
}

export default App
