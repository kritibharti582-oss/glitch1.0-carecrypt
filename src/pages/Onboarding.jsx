import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onboarding() {
  const navigate = useNavigate()
  return (
    <section className="screen">
      <div className="welcome-card">
        <div className="welcome-content">
          <h2 className="section-title">Your space to feel better</h2>
          <p className="section-text">Book trusted therapists, attend secure sessions, and track your progress.</p>
          <ul className="checklist">
            <li>Verified professionals</li>
            <li>Flexible chat, video, in‑person</li>
            <li>Private and secure</li>
          </ul>
          <div className="actions">
            <button className="button-primary large" onClick={() => navigate('/register')}>Get Started</button>
            <button className="button-secondary large" onClick={() => navigate('/login')}>I already have an account</button>
          </div>
        </div>
      </div>
    </section>
  )
}
