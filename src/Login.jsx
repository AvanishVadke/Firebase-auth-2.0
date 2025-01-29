import { useRef, useEffect, useState } from "react"
import app from "./firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import NavBar from "./Navbar"
import { FaEye, FaEyeSlash } from "react-icons/fa" 
import "./Login.css"

function Login() {
  const nav = useNavigate()

  useEffect(() => {
    const un = localStorage.getItem("un")
    if (un !== null) {
      nav("/home")
    }
  }, [nav])

  const rUsername = useRef()
  const rPassword = useRef()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [msg, setMsg] = useState("")

  const hUsername = (e) => {
    setUsername(e.target.value)
  }
  const hPassword = (e) => {
    setPassword(e.target.value)
  }

  const save = (e) => {
    e.preventDefault()
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth, username, password)
      .then((res) => {
        localStorage.setItem("un", username)
        nav("/home")
      })
      .catch((err) => {
        setMsg("Issue: " + err.message)
      })
  }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <h1>Login</h1>
        <form onSubmit={save}>
          <div className="input-box">
            <input
              type="email"
              ref={rUsername}
              value={username}
              onChange={hUsername}
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="input-box">
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                ref={rPassword}
                value={password}
                onChange={hPassword}
                placeholder="Enter your Password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash className="icon" /> : <FaEye className="icon" />}
              </span>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        {msg && <p className="error-message">{msg}</p>}
      </div>
    </>
  )
}

export default Login

