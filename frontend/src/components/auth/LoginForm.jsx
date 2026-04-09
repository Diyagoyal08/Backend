import { useState } from 'react'

function LoginForm({ onSubmit, loading, error }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '540px', margin: '0 auto' }}>
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
          placeholder="Enter your password"
          required
        />
      </div>
      {error && <div className="alert">{error}</div>}
      <button type="submit" className="primary-button" disabled={loading}>
        {loading ? 'Signing in...' : 'Login'}
      </button>
    </form>
  )
}

export default LoginForm
