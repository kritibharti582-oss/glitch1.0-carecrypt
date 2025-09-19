import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const THERAPISTS = [
  { id: 1, name: 'Dr. Maya Rao', spec: 'Anxiety, CBT', rating: 4.9, fee: 1200, photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=320&q=60' },
  { id: 2, name: 'Dr. Arjun Patel', spec: 'Depression, Mindfulness', rating: 4.8, fee: 1000, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&q=60' },
  { id: 3, name: 'Dr. Sara Ali', spec: 'Relationships, Trauma', rating: 4.7, fee: 1500, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&q=60' },
  { id: 4, name: 'Dr. Neeraj Singh', spec: 'Stress, Sleep', rating: 4.6, fee: 900, photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=320&q=60' },
]

export default function Therapists() {
  const navigate = useNavigate()
  const data = useMemo(() => THERAPISTS, [])

  return (
    <section className="screen">
      <h2 className="section-title">Therapists</h2>
      <div className="list">
        {data.map(t => (
          <article className="therapist-card" key={t.id}>
            <img className="therapist-avatar" src={t.photo} alt={`${t.name} profile photo`} loading="lazy" />
            <div className="therapist-content">
              <h3 className="card-title">{t.name}</h3>
              <p className="card-text">{t.spec}</p>
              <div className="meta-row">
                <span className="badge">★ {t.rating.toFixed(1)}</span>
                <span className="fee">₹ {t.fee}</span>
              </div>
              <div className="actions">
                <button className="button-primary" onClick={() => navigate('/booking', { state: { therapist: t } })}>Book</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
