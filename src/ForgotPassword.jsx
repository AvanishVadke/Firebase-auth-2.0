import NavBar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import "./Login.css"

function ForgotPassword() {
  const nav = useNavigate()

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un !== null) {
      nav("/home")
    }
  }, [nav])

  const rUsername = useRef()

  const [username, setUsername] = useState("")
  const [msg, setMsg] = useState("")

  const hUsername = (e) => setUsername(e.target.value)

  const save = (e) => {
    e.preventDefault()

    const auth = getAuth()
    sendPasswordResetEmail(auth, username)
      .then(() => {
        nav("/login")
      })
      .catch((error) => {
        setMsg("Error: " + error)
      })
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Forgot Password</h1>
        <form onSubmit={save}>
          <div className="input-box">
            <input
              type="email"
              placeholder="Enter your registered Email"
              ref={rUsername}
              onChange={hUsername}
              value={username}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {msg && <p className="error-message">{msg}</p>}
      </div>
    </>
  )
}
export default ForgotPassword

