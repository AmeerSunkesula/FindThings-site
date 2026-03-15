import React from "react"

function Footer() {
  return (
    <footer className="Footer">
      <span className="Footer-text">By Ameer</span>
      <div className="Footer-links">
        <a
          className="Footer-link"
          href="http://github.com/AmeerSunkesula"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bi bi-github"></i> GitHub
        </a>
        <a
          className="Footer-link"
          href="https://www.linkedin.com/in/ameersunkesula/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
