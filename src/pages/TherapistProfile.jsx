import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const FALLBACK = { id: 0, name: 'Therapy Session', spec: 'General', rating: 4.8, fee: 1000, photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=320&q=60' }

export default function TherapistProfile() {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const t = state?.therapist || FALLBACK

  return (
    <section className="screen">
      <article className="profile-card">
        <img className="profile-avatar" src={t.photo} alt={`${t.name} profile photo`} />
        <div className="profile-content">
          <h2 className="section-title" style={{ marginBottom: 4 }}>{t.name}</h2>
          <div className="meta-row">
            <span className="badge">★ {Number(t.rating || 4.8).toFixed(1)}</span>
            <span className="fee">₹ {t.fee || 1000}</span>
          </div>
          <p className="section-text" style={{ marginTop: 8 }}>{t.spec}</p>
        </div>
      </article>
      <div className="form-card">
        <button className="button-primary large" onClick={() => navigate('/booking', { state: { therapist: t } })}>Book Session</button>
      </div>
    </section>
  )
}
