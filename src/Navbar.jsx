import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaSignOutAlt } from "react-icons/fa"
import "./Navbar.css"

function NavBar() {
  const [username, setUsername] = useState(null)
  const nav = useNavigate()

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un !== null) {
      setUsername(un)
    }
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("un")
    setUsername(null)
    nav("/login")
  }

  return (
    <nav className="navbar">
      {username === null && (
        <>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/fp">Forget Password</Link>
        </>
      )}
      {username !== null && (
        <>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cp">Change Password</Link>
          <Link to="/ask-doubts">Have any questions?</Link>
          <button className="logout-nav-btn" onClick={handleLogout}>
            <FaSignOutAlt className="logout-nav-icon" />
            Logout
          </button>
        </>
      )}
    </nav>
  )
}

export default NavBar

