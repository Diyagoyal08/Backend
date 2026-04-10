import { useState } from 'react'

function RegisterForm({ onSubmit, loading, error }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ name, email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '540px', margin: '0 auto' }}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter a strong password"
          required
        />
      </div>
      {error && <div className="alert">{error}</div>}
      <button type="submit" className="primary-button" disabled={loading}>
        {loading ? 'Creating account...' : 'Register'}
      </button>
    </form>
  )
}

export default RegisterForm
