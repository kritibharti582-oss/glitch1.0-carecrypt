import React, { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const METHODS = [
  { id: 'upi', label: 'UPI' },
  { id: 'card', label: 'Card' },
  { id: 'wallet', label: 'Wallet' },
]

export default function Payment() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const booking = state?.booking || JSON.parse(localStorage.getItem('lastBooking') || 'null')
  const [method, setMethod] = useState('upi')
  const [upi, setUpi] = useState('')
  const [card, setCard] = useState({ number: '', expiry: '', cvc: '' })
  const [wallet, setWallet] = useState('Paytm')
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState(null)

  function pay(e) {
    e.preventDefault()
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setResult({ status: 'success', id: 'PAY' + Math.random().toString(36).slice(2, 8).toUpperCase() })
      const history = JSON.parse(localStorage.getItem('history') || '[]')
      history.push({ ...booking, paidAt: new Date().toISOString(), paymentMethod: method })
      localStorage.setItem('history', JSON.stringify(history))
      navigate('/profile', { state: { justPaid: true } })
    }, 900)
  }

  return (
    <section className="screen">
      <h2 className="section-title">Payment</h2>
      {booking && (
        <div className="info-card">
          <h3 className="card-title">{booking.therapist?.name || 'Therapy Session'}</h3>
          <p className="card-text">{booking.date} · {booking.time} · {booking.mode}</p>
        </div>
      )}

      <form className="form-card" onSubmit={pay}>
        <div className="segmented">
          {METHODS.map(m => (
            <button
              key={m.id}
              type="button"
              className={method === m.id ? 'segment active' : 'segment'}
              onClick={() => setMethod(m.id)}
              aria-pressed={method === m.id}
            >{m.label}</button>
          ))}
        </div>

        {method === 'upi' && (
          <div className="form-row">
            <label htmlFor="upi" className="form-label">UPI ID</label>
            <input id="upi" className="input" placeholder="name@bank" value={upi} onChange={e => setUpi(e.target.value)} required />
          </div>
        )}
        {method === 'card' && (
          <>
            <div className="form-row">
              <label htmlFor="card-number" className="form-label">Card Number</label>
              <input id="card-number" inputMode="numeric" pattern="[0-9 ]*" maxLength={19} className="input" value={card.number} onChange={e => setCard({ ...card, number: e.target.value.replace(/[^0-9 ]/g,'') })} placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="form-row grid-2">
              <div>
                <label htmlFor="expiry" className="form-label">Expiry</label>
                <input id="expiry" className="input" placeholder="MM/YY" value={card.expiry} onChange={e => setCard({ ...card, expiry: e.target.value })} required />
              </div>
              <div>
                <label htmlFor="cvc" className="form-label">CVC</label>
                <input id="cvc" className="input" inputMode="numeric" maxLength={4} value={card.cvc} onChange={e => setCard({ ...card, cvc: e.target.value.replace(/\D/g,'') })} required />
              </div>
            </div>
          </>
        )}
        {method === 'wallet' && (
          <div className="form-row">
            <label htmlFor="wallet" className="form-label">Wallet</label>
            <select id="wallet" className="input" value={wallet} onChange={e => setWallet(e.target.value)}>
              <option>Paytm</option>
              <option>PhonePe</option>
              <option>Amazon Pay</option>
              <option>Google Pay</option>
            </select>
          </div>
        )}

        <button className="button-primary large" type="submit" disabled={processing}>{processing ? 'Processing…' : 'Pay Securely'}</button>
      </form>
    </section>
  )
}
