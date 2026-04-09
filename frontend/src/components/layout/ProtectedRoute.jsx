import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function ProtectedRoute({ children }) {
  const { authenticated } = useContext(AuthContext)

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
