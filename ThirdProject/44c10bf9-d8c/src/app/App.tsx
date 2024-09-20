import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '../styles/global.css'
import { store } from '../model/store'
import AppRoutes from '../routes/AppRoutes'

function App() {
	useEffect(() => {
		if (!localStorage.getItem('appInitialized')) {
			localStorage.clear()
			localStorage.setItem('appInitialized', 'true')
		}
	}, [])

	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	)
}

export default App
