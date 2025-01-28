import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSignOutAlt, FaUser } from "react-icons/fa"
import NavBar from "./Navbar"
import "./Login.css"

function Home() {
  const nav = useNavigate()
  const [username, setUsername] = useState("")

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un !== null) {
      setUsername(un)
    } else {
      nav("/login")
    }
  }, [nav])

  const lo = (e) => {
    e.preventDefault()
    localStorage.removeItem("un")
    nav("/login")
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper home-content">
          <h1>Welcome to Your Home page</h1>
          <p>
            <FaUser className="icon-left" />
            You are logged in as:
            <span className="user-email">{username}</span>
          </p>
          <br /><br />
          <button className="logout-btn" onClick={lo}>
            <FaSignOutAlt className="icon-left" />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

