import React from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"

function RecipeDetails() {
  const { state: recipe } = useLocation()
  const navigate = useNavigate()

  if (!recipe) {
    return (
      <div
        style={{ padding: "40px", textAlign: "center", fontFamily: "Inter" }}>
        No recipe data found.{" "}
        <Link to="/recipes" className="Link">
          Go back
        </Link>
      </div>
    )
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => navigate(-1)}
          className="PaginationButton"
          style={{ marginBottom: "20px" }}>
          &larr; Back
        </button>
      </div>

      <div className="details">
        <div className="details-image-container">
          <img className="details-image" src={recipe.image} alt={recipe.name} />
          <span className="badge">{recipe.difficulty}</span>
        </div>

        <div className="details-content">
          <div className="details-header">
            <span className="category">{recipe.cuisine}</span>
            <div className="rating">
              ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
            </div>
          </div>

          <h2 className="name">
            {recipe.name}
          </h2>

          <div style={{ marginTop: "25px" }}>
            <h3 className="section-title">
              Ingredients ({recipe.ingredients.length})
            </h3>
            <ul className="inglist">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "25px" }}>
            <h3 className="section-title">
              Instructions
            </h3>
            <ol className="inst">
              {recipe.instructions.map((instruction, i) => (
                <li key={i} style={{ marginBottom: "10px" }}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
