import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../components/Error";
import CategoryNews from "../Pages/CategoryNews.jsx"

import Login from "../Pages/Login.jsx"
import Register from "../Pages/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/login",
    element : <Login></Login>
  },
  {
  path : "/register",
  element : <Register></Register>,
    
  },
]);
export default router;
