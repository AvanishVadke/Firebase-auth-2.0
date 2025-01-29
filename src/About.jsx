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
        <h2>Technical Skills</h2>
        <p>
          I am passionate about developing full-stack applications with a focus on
          creating seamless user experiences. Here are some of the skills I have:
        </p>
        <ul>
          <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS, shadCN UI</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Database:</strong> MongoDB, PostgreSQL, MySQL</li>
          <li><strong>Authentication:</strong> Firebase Authentication, Clerk</li>
          <li><strong>Languages:</strong> Java, JavaScript+, Python, Kotlin</li>
          <li><strong>Others:</strong> Git, REST APIs, Agile Methodologies</li>
        </ul>
        <br />
        <p>
          I enjoy learning new technologies, working on challenging projects, and
          contributing to open-source. I am currently exploring the MERN stack and
          React Native for mobile app development.
        </p>
      </div>
    </>
  )
}

export default About


