import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/profile'

  function onSubmit(e) {
    e.preventDefault()
    login(email)
    navigate(from, { replace: true })
  }

  return (
    <section className="screen">
      <h2 className="section-title">Sign In</h2>
      <form className="form-card" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="button-primary large" type="submit">Continue</button>
      </form>
    </section>
  )
}
