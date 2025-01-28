import NavBar from "./Navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { getAuth, updatePassword } from "firebase/auth"
import "./Login.css"

function ChangePassword() {
  const nav = useNavigate()

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un === null) {
      nav("/login")
    }
  }, [nav])

  const rPassword1 = useRef()
  const rPassword2 = useRef()

  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [msg, setMsg] = useState("")

  const hPassword1 = (e) => setPassword1(e.target.value)
  const hPassword2 = (e) => setPassword2(e.target.value)

  const save = (e) => {
    e.preventDefault()

    if (password1 === password2) {
      const auth = getAuth()
      const user = auth.currentUser

      if (user) {
        updatePassword(user, password1)
          .then(() => {
            setMsg("Password updated successfully!")
            nav("/login")
          })
          .catch((error) => {
            setMsg("Error: " + error.message)
          })
      } else {
        setMsg("No user is logged in.")
      }
    } else {
      setMsg("Passwords do not match. Please try again.")
      rPassword1.current.focus()
    }
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Change Password</h1>
        <form onSubmit={save}>
          <div className="input-box">
            <input
              type="password"
              placeholder="Enter new password"
              ref={rPassword1}
              onChange={hPassword1}
              value={password1}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm new password"
              ref={rPassword2}
              onChange={hPassword2}
              value={password2}
              required
            />
          </div>
          <button type="submit">Update Password</button>
        </form>
        {msg && <p className="error-message">{msg}</p>}
      </div>
    </>
  )
}

export default ChangePassword

