import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import ChangePassword from "./ChangePassword"
import ForgotPassword from "./ForgotPassword"
import Login from "./Login"
import SignUp from "./SignUp"
import AskDoubts from "./AskDoubts"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cp" element={<ChangePassword />} />
        <Route path="/fp" element={<ForgotPassword />} />
        <Route path="/ask-doubts" element={<AskDoubts />} />
      </Routes>
    </Router>
  )
}

export default App

