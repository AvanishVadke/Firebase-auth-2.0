import React, { useState } from "react"
import emailjs from "emailjs-com"
import { FaUser, FaQuestion, FaPaperPlane } from "react-icons/fa"
import NavBar from "./Navbar"
import "./Login.css"

function AskDoubts() {
  const [name, setName] = useState("")
  const [doubt, setDoubt] = useState("")
  const [msg, setMsg] = useState("")

  const handleAskDoubt = (e) => {
    e.preventDefault()

    if (name && doubt) {
      const data = {
        name: name,
        doubt: doubt,
      }

      emailjs.send("service_hx0voiv", "template_qveht7n", data, "hNtAss1MeUKC0tntL").then(
        (response) => {
          setMsg(`Thank you, ${name}. Your doubt has been submitted.`)
          setName("")
          setDoubt("")
        },
        (err) => {
          setMsg("Sorry, there was an error submitting your doubt. Please try again.")
          console.error("EmailJS error:", err)
        },
      )
    } else {
      setMsg("Please fill in all fields.")
    }
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper ask-doubts-wrapper">
          <h1>Ask Your Doubt</h1>
          <form onSubmit={handleAskDoubt}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <textarea
                placeholder="Your Doubt"
                value={doubt}
                onChange={(e) => setDoubt(e.target.value)}
                required
              ></textarea>
              <FaQuestion className="icon" />
            </div>
            <button type="submit">
              <FaPaperPlane className="icon-left" />
              Submit Doubt
            </button>
          </form>
          {msg && <p className="message">{msg}</p>}
        </div>
      </div>
    </>
  )
}

export default AskDoubts

