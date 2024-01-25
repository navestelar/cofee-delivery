import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { AppRoutes } from './router'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}
