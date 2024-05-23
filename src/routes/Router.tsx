import { Routes, Route, Navigate } from 'react-router-dom'
import { Cart, Home, Success } from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
