import { Route, Routes } from 'react-router-dom'

import Checkout from './pages/checkout'
import Main from './pages/home'
import Success from './pages/success'

export function AppRoutes() {
  const isAuthenticated = true

  return (
    <Routes>
      <Route path="/coffee-delivery/*" element={<Main />} />
      <Route path="/coffee-delivery/checkout" element={<Checkout />} />

      {isAuthenticated && <Route path="success" element={<Success />} />}
    </Routes>
  )
}
