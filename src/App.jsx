import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Therapists from './pages/Therapists.jsx'
import Booking from './pages/Booking.jsx'
import Payment from './pages/Payment.jsx'
import Profile from './pages/Profile.jsx'

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-label">Home</span>
      </NavLink>
      <NavLink to="/therapists" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-label">Therapists</span>
      </NavLink>
      <NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-label">Book</span>
      </NavLink>
      <NavLink to="/payment" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-label">Pay</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <span className="nav-label">Profile</span>
      </NavLink>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <h1 className="brand-title">Therapy Room</h1>
          <p className="brand-subtitle">Book online sessions with trusted therapists.</p>
        </header>

        <main className="content-area">
          <div className="mobile-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/therapists" element={<Therapists />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </main>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}
