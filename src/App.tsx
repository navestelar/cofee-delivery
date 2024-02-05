import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { CoffeContextProvider } from './contexts/CoffeContext'
import { AppRoutes } from './router'

export default function App() {
  return (
    <BrowserRouter>
      <CoffeContextProvider>
        <Header />
        <AppRoutes />
      </CoffeContextProvider>
    </BrowserRouter>
  )
}
