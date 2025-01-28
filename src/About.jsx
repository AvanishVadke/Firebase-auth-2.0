import NavBar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Login.css"

function About() {
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
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>About {username}</h1>
        {/* Add more content here if needed */}
      </div>
    </>
  )
}
export default About

