import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { registerUser } from '../api/authApi'
import RegisterForm from '../components/auth/RegisterForm'

function RegisterPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (registrationData) => {
    setLoading(true)
    setError('')

    registerUser(registrationData)
      .then((response) => {
        const token = response.data?.token
        if (!token) {
          throw new Error('Missing authentication token')
        }
        login(token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setError(err.response?.data?.error || 'Unable to register. Please try again.')
      })
      .finally(() => setLoading(false))
  }

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Create an account</h1>
          <p className="text-muted">Register to write posts, manage your dashboard, and publish content.</p>
        </div>
      </div>

      <RegisterForm onSubmit={handleSubmit} loading={loading} error={error} />

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </section>
  )
}

export default RegisterPage
