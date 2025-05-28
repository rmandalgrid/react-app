import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ShoppingDashboard from './pages/ShoppingDashboard'
import Cart from './components/Cart'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ShoppingDashboard />} />
        <Route path="/cart" element={< Cart/>} />
        
        <Route path="/cart1" element={< Cart/>} />
        <Route path="/cart3" element={< Cart/>} />
      </Routes>
    </Router>
  )
}

export default App 