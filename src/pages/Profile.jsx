import React, { useEffect, useState } from 'react'

export default function Profile() {
  const [history, setHistory] = useState([])
  useEffect(() => {
    const h = JSON.parse(localStorage.getItem('history') || '[]')
    setHistory(h.reverse())
  }, [])

  return (
    <section className="screen">
      <h2 className="section-title">Your Profile</h2>

      <div className="info-card">
        <h3 className="card-title">Personal Details</h3>
        <p className="card-text">Name: You</p>
        <p className="card-text">Email: you@example.com</p>
      </div>

      <h3 className="section-title section-spacer">Bookings & History</h3>
      <div className="list">
        {history.length === 0 && (
          <p className="section-text">No past bookings yet.</p>
        )}
        {history.map((b, i) => (
          <article className="history-card" key={i}>
            <div className="history-row">
              <div>
                <div className="card-title">{b.therapist?.name || 'Therapy Session'}</div>
                <div className="card-text">{b.date} · {b.time} · {b.mode}</div>
              </div>
              <span className="badge success">Paid</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
