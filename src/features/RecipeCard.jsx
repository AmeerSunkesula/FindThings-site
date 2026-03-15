export default function RecipeCard({ recipe }) {
  return (
    <div className="RecipeCard">
      <div className="RecipeCardImageContainer">
        <img className="RecipeImage" src={recipe.image} alt={recipe.name} />
        <span className="RecipeBadge">{recipe.difficulty}</span>
      </div>
      <div className="RecipeContent">
        <div className="RecipeHeader">
          <span className="RecipeCuisine">{recipe.cuisine}</span>
          <div className="RecipeRating">
            ⭐ {recipe.rating} ({recipe.reviewCount})
          </div>
        </div>
        <h4 className="RecipeName">{recipe.name}</h4>
        <div className="RecipeStats">
          <div className="StatItem">
            <span className="StatLabel">Prep</span>
            <span className="StatValue">{recipe.prepTimeMinutes}m</span>
          </div>
          <div className="StatItem">
            <span className="StatLabel">Cook</span>
            <span className="StatValue">{recipe.cookTimeMinutes}m</span>
          </div>
          <div className="StatItem">
            <span className="StatLabel">Calories</span>
            <span className="StatValue">{recipe.caloriesPerServing}</span>
          </div>
        </div>
        <div className="RecipeTags">
          {recipe.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="RecipeTag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
