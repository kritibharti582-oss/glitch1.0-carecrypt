import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import RequireAuth from './components/RequireAuth.jsx'
import Home from './pages/Home.jsx'
import Therapists from './pages/Therapists.jsx'
import TherapistProfile from './pages/TherapistProfile.jsx'
import Booking from './pages/Booking.jsx'
import Payment from './pages/Payment.jsx'
import Profile from './pages/Profile.jsx'
import Onboarding from './pages/Onboarding.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

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
    <AuthProvider>
      <BrowserRouter>
        <div className="app-shell">
          <header className="app-header">
            <h1 className="brand-title"><span className="brand-logo" aria-hidden="true">🧠</span>CareCrypt</h1>
            <p className="brand-subtitle">Book online sessions with trusted therapists.</p>
          </header>

          <main className="content-area">
            <div className="mobile-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/therapists" element={<Therapists />} />
                <Route path="/therapists/:id" element={<TherapistProfile />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
              </Routes>
            </div>
          </main>

          <BottomNav />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
