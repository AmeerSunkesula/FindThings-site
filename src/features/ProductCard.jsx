export default function ProductCard({ product }) {
  return (
    <div className="RecipeCard">
      <div className="RecipeCardImageContainer">
        <img
          className="RecipeImage"
          src={product.thumbnail}
          alt={product.title}
        />
      </div>
      <div className="RecipeContent">
        <div className="RecipeHeader">
          <span className="RecipeCuisine">{product.category}</span>
          <div className="RecipeRating">⭐ {product.rating}</div>
        </div>
        <h4 className="RecipeName">{product.title}</h4>
        <div className="RecipeStats">
          <div className="StatItem">
            <span className="StatLabel">Price</span>
            <span className="StatValue">{`$${product.price}` || "N/A"}</span>
          </div>
          <div className="StatItem">
            <span className="StatLabel">Discount</span>
            <span className="StatValue">{product.discountPercentage}%</span>
          </div>
          <div className="StatItem">
            <span className="StatLabel">Weight</span>
            <span className="StatValue">{product.weight}g</span>
          </div>
        </div>
        <div className="RecipeTags">
          {product.tags?.slice(0, 4).map((tag, i) => (
            <span key={i} className="RecipeTag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
