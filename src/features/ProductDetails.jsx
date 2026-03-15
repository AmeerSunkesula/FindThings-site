import React from "react"
import { useLocation, Link, useNavigate } from "react-router-dom"

function ProductDetails() {
  const { state: product } = useLocation()
  const navigate = useNavigate()

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center", fontFamily: 'Inter' }}>
        No product data found. <Link to="/products" className="Link">Go back</Link>
      </div>
    )
  }

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ padding: "0 0 20px 0" }}>
        <Link to="/products" className="PaginationButton" style={{ textDecoration: "none", display: "inline-block" }}>
          &larr; Back
        </Link>
      </div>

      <div className="details">
        <div className="details-image-container">
          <img
            className="details-image"
            src={product.thumbnail}
            alt={product.title}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="details-content">
          <div className="details-header">
            <span className="category">{product.category}</span>
            <div className="rating">⭐ {product.rating}</div>
          </div>
          
          <h2 className="name">
            {product.title}
          </h2>

          <div className="product-price">
            <span className="product-price-symbol">$</span>
            {product.price}
          </div>
          
          <p className="description">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
