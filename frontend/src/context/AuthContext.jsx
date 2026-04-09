import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  authenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(token), token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
