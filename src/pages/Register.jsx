import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    register(name, email)
    navigate('/profile')
  }

  return (
    <section className="screen">
      <h2 className="section-title">Create Account</h2>
      <form className="form-card" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input id="name" className="input" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" className="input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" className="input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button className="button-primary large" type="submit">Create Account</button>
      </form>
    </section>
  )
}
