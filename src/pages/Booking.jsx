import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const modes = [
  { id: 'chat', label: 'Chat' },
  { id: 'video', label: 'Video Call' },
  { id: 'inperson', label: 'In‑person' },
]

export default function Booking() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const therapist = state?.therapist || null
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [mode, setMode] = useState('video')

  function onSubmit(e) {
    e.preventDefault()
    const booking = { therapist, date, time, mode }
    localStorage.setItem('lastBooking', JSON.stringify(booking))
    navigate('/payment', { state: { booking } })
  }

  return (
    <section className="screen">
      <h2 className="section-title">Book Appointment</h2>
      {therapist && (
        <div className="info-card">
          <h3 className="card-title">{therapist.name}</h3>
          <p className="card-text">{therapist.spec} · ₹ {therapist.fee}</p>
        </div>
      )}

      <form className="form-card" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="date" className="form-label">Date</label>
          <input id="date" type="date" className="input" value={date} onChange={e => setDate(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="time" className="form-label">Time</label>
          <input id="time" type="time" className="input" value={time} onChange={e => setTime(e.target.value)} required />
        </div>
        <fieldset className="form-row">
          <legend className="form-label">Mode</legend>
          <div className="segmented">
            {modes.map(m => (
              <button
                key={m.id}
                type="button"
                className={mode === m.id ? 'segment active' : 'segment'}
                onClick={() => setMode(m.id)}
                aria-pressed={mode === m.id}
              >{m.label}</button>
            ))}
          </div>
        </fieldset>

        <button className="button-primary large" type="submit">Continue to Payment</button>
      </form>
    </section>
  )
}
