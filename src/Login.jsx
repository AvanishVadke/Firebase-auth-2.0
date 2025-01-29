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

  const save = async (e) => {
    e.preventDefault()
    const auth = getAuth(app)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password)
      const user = userCredential.user
      
      if (!user.emailVerified) {
        await auth.signOut()
        setMsg("Please verify your email before logging in. Check your inbox for the verification link.")
        setPassword("")
        return
      }

      localStorage.setItem("un", username)
      nav("/home")
    } catch (err) {
      setMsg("Issue: " + err.message)
      setPassword("")
    }
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
        <br />
        {msg && <p className="error-message">{msg}</p>}
      </div>
    </>
  )
}

export default Login