import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"

function NavBar() {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un !== null) {
      setUsername(un)
    }
  }, [])

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
          <Link to="/ask-doubts">Ask Doubts</Link>
        </>
      )}
    </nav>
  )
}

export default NavBar

