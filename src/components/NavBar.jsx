import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header className="Header">
      <Link to="/" style={{ textDecoration: "none" }}><h1>FindThings</h1></Link>
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
    </header>
  )
}

export default NavBar

