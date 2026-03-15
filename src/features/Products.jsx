import React, { useState } from "react"
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

function Products() {
  const [products, setProducts] = React.useState([])
  var [skip, setSkip] = useState(0)
  var [total, setTotal] = useState(0)

  React.useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10&skip=" + skip)
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products])
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
        {products?.map((product) => {
          return (
            <Link
              to={`/productDetails`}
              state={product}
              key={product.id}>
              <ProductCard product={product} />
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
      <div style={{ display: "flex", justifyContent: "center", width: "100%", paddingBottom: "20px" }}>
        <span className="PageInfo">By Ameer</span>
      </div>
    </div>
  )
}
export default Products
