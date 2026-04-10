import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'

function Navbar() {
  const { authenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="nav-bar">
      <div className="nav-inner container">
        <NavLink className="nav-logo" to="/">
          TechBlog
        </NavLink>
        <nav className="nav-links">
          <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/blog">
            Blog
          </NavLink>
          {authenticated && (
            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/dashboard">
              Dashboard
            </NavLink>
          )}
          {authenticated ? (
            <button type="button" className="button-link" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/register">
                Register
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/login">
                Login
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
