import React from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function NavBar() {
  return (
    <header className="Header">
      <h1>FindThings</h1>
      <ul className="Links">
        <li>
          <Link to="/products" className="Link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="Link">
            Recipes
          </Link>
        </li>
      </ul>
      <ul className="Links">
        <li>
          <Link
            className="Link"
            to="http://github.com/AmeerSunkesula"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="Link"
            to="https://www.linkedin.com/in/ameersunkesula/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar
