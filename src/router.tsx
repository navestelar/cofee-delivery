import { Route, Routes } from 'react-router-dom'

import Error from './pages/error'
import Main from './pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
