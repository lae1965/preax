import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '../model/store'
import AppRoutes from '../routes/AppRoutes'

import '../styles/global.css'

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
