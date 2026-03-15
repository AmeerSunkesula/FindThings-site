import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Products from "./features/Products.jsx"
import ProductDetails from "./features/ProductDetails.jsx"
import Recipes from "./features/Recipes.jsx"
import RecipeDetails from "./features/RecipeDetails.jsx"

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/recipeDetails",
        element: <RecipeDetails></RecipeDetails>,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
)
