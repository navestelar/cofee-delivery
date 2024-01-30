import { Route, Routes } from 'react-router-dom'

import Checkout from './pages/checkout'
import Error from './pages/error'
import Main from './pages/home'
import Success from './pages/success'

export function AppRoutes() {
  const isAuthenticated = true

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />

      {isAuthenticated && <Route path="success" element={<Success />} />}
    </Routes>
  )
}
