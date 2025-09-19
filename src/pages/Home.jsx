import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <section className="screen">
      <div className="welcome-card">
        <div className="welcome-content">
          <h2 className="section-title">Welcome</h2>
          <p className="section-text">Find verified therapists and book secure online sessions. Calm, confidential, and convenient.</p>
          <div className="actions">
            <button className="button-primary large" onClick={() => navigate('/therapists')}>Find a Therapist</button>
            <button className="button-secondary large" onClick={() => navigate('/booking')}>Book Appointment</button>
          </div>
        </div>
      </div>

      <div className="quick-grid">
        <div className="info-card">
          <h3 className="card-title">Chat, Video, In‑person</h3>
          <p className="card-text">Choose the mode that suits you best for your comfort and schedule.</p>
        </div>
      </div>
    </section>
  )
}
