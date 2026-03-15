import React, { useState } from "react"
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"

function Recipes() {
  const [recipes, setRecipes] = React.useState([])
  var [skip, setSkip] = useState(0)
  var [total, setTotal] = useState(0)

  React.useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=10&skip=" + skip)
      .then((res) => res.json())
      .then((data) => {
        setRecipes([...data.recipes])
        setTotal(data.total)
      })
  }, [skip])
  return (
    <div>
      <div style={{ padding: "20px 20px 0 20px" }}>
        <Link to="/" className="PaginationButton" style={{ textDecoration: "none", display: "inline-block" }}>
          &larr; Back to Home
        </Link>
      </div>
      <div className="RecipeRoot">
        {recipes?.map((recipe) => {
          return (
            <Link
              to={`/recipeDetails`}
              state={recipe}
              key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Link>
          )
        })}
      </div>
      <div className="Pagination">
        <button
          disabled={skip === 0}
          onClick={() => setSkip(Math.max(0, skip - 10))}
          className="PaginationButton">
          Previous
        </button>

        <button
          disabled={skip + 10 >= total}
          onClick={() => setSkip(skip + 10)}
          className="PaginationButton">
          Next
        </button>
      </div>
    </div>
  )
}

export default Recipes
