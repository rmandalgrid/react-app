import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ShoppingDashboard from './pages/ShoppingDashboard'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ShoppingDashboard />} />
        <Route path="/cart2" element={< Cart/>} />
      </Routes>
    </Router>
  )
}

export default App 