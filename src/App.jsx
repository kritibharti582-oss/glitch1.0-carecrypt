import React from 'react'

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="brand-title">Therapy Room</h1>
        <p className="brand-subtitle">A minimal React app is now running.</p>
      </header>

      <main className="content-area">
        <section className="info-card">
          <h2 className="section-title">Status</h2>
          <p className="section-text">Frontend is up. No backend is connected in this project. If you need a Python/Flask backend, we can integrate an API later.</p>
          <div className="actions">
            <a className="button-primary" href="#" onClick={(e) => e.preventDefault()}>Explore</a>
          </div>
        </section>
      </main>
    </div>
  )
}
