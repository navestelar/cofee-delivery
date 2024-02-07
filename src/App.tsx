import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { AppRoutes } from './router'

export default function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Header />
        <AppRoutes />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}
