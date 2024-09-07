
import {
    createBrowserRouter,
  } from "react-router-dom";


import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop"
import CategoryPage from "../pages/Category/CategoryPage"
import Search from "../pages/Search";
import ProductPage from "../pages/ProductPage";

import Login from '../pages/Login'
import Register from '../pages/Register'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,

      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: '/search',
          element: <Search/>
        },
        {
          path: `/categories/:categoryName`,
          element: <CategoryPage/>
        },
        {
          path: `/product/:id`,
          element: <ProductPage/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]);

  export default router

