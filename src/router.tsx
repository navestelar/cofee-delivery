import { Route, Routes } from 'react-router-dom'

import Checkout from './pages/checkout'
import Error from './pages/error'
import Main from './pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
