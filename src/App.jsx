import { Outlet, useLocation, Link } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"
import "./App.css"

function App() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div>
      <NavBar></NavBar>
      {isHome ?
        <div className="home-container">
          <h1 className="home-title">FindThings</h1>
          <p className="home-subtitle">
            Discover the best recipes for your next meal or explore top products
            for your home, all in one place.
          </p>
          <div className="home-buttons">
            <Link to="/products" className="home-button products-btn">
              <i className="bi bi-box-seam"></i>
              Browse Products
            </Link>
            <Link to="/recipes" className="home-button recipes-btn">
              <i className="bi bi-journal-text"></i>
              Explore Recipes
            </Link>
          </div>
        </div>
      : <Outlet></Outlet>}
    </div>
  )
}

export default App
