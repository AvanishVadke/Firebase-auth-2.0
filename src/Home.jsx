import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSignOutAlt, FaUser, FaReact, FaNodeJs, FaGithub, FaCode, FaBook, FaTools, FaExternalLinkAlt } from "react-icons/fa"
import { SiFirebase, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si"
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

  const techResources = [
    { name: "React Docs", url: "https://react.dev", icon: FaReact, color: "#61DAFB" },
    { name: "Firebase", url: "https://firebase.google.com/docs", icon: SiFirebase, color: "#FFCA28" },
    { name: "Node.js", url: "https://nodejs.org/docs", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", url: "https://docs.mongodb.com", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com/docs", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org", icon: SiJavascript, color: "#F7DF1E" }
  ]

  const devTools = [
    { name: "GitHub", url: "https://github.com", icon: FaGithub, description: "Version Control & Collaboration" },
    { name: "VS Code", url: "https://code.visualstudio.com", icon: FaCode, description: "Code Editor" },
    { name: "Stack Overflow", url: "https://stackoverflow.com", icon: FaBook, description: "Developer Q&A" },
    { name: "Can I Use", url: "https://caniuse.com", icon: FaTools, description: "Browser Compatibility" }
  ]

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="wrapper home-dashboard">
          <div className="welcome-section">
            <h1>Developer Dashboard</h1>
            <div className="user-info">
              <FaUser className="user-icon" />
              <span className="user-email">{username}</span>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h2><FaBook className="section-icon" />Quick Documentation</h2>
              <div className="resource-grid">
                {techResources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                    style={{ borderLeft: `4px solid ${resource.color}` }}
                  >
                    <resource.icon className="resource-icon" style={{ color: resource.color }} />
                    <span>{resource.name}</span>
                    <FaExternalLinkAlt className="external-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="dashboard-card">
              <h2><FaTools className="section-icon" />Developer Tools</h2>
              <div className="tools-grid">
                {devTools.map((tool, index) => (
                  <a 
                    key={index}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-card"
                  >
                    <tool.icon className="tool-icon" />
                    <div className="tool-info">
                      <h3>{tool.name}</h3>
                      <p>{tool.description}</p>
                    </div>
                    <FaExternalLinkAlt className="external-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="dashboard-card tech-tips">
              <h2><FaCode className="section-icon" />Tech Tips</h2>
              <div className="tips-list">
                <div className="tip-item">
                  <strong>React Best Practice:</strong> Use React.memo() for performance optimization
                </div>
                <div className="tip-item">
                  <strong>Firebase Tip:</strong> Use Firebase Rules for better security
                </div>
                <div className="tip-item">
                  <strong>CSS Tip:</strong> Use Flexbox and Grid for responsive layouts
                </div>
                <div className="tip-item">
                  <strong>JavaScript:</strong> Always use async/await for cleaner code
                </div>
              </div>
            </div>
          </div>

          <div className="logout-section">
            <button className="logout-btn" onClick={lo}>
              <FaSignOutAlt className="logout-icon" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

