import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { loginUser } from '../api/authApi'
import LoginForm from '../components/auth/LoginForm'

function LoginPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (credentials) => {
    setLoading(true)
    setError('')

    loginUser(credentials)
      .then((response) => {
        const token = response.data?.token
        if (!token) {
          throw new Error('Missing authentication token')
        }
        login(token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setError(err.response?.data?.error || 'Unable to log in. Please try again.')
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Login</h1>
          <p className="text-muted">Enter your credentials to manage content and publish new posts.</p>
        </div>
      </div>
      <LoginForm onSubmit={handleSubmit} loading={loading} error={error} />
    </section>
  )
}

export default LoginPage
