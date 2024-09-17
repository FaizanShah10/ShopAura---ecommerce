import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import CategoryPage from "../pages/Category/CategoryPage";
import Search from "../pages/Search";
import ProductPage from "../pages/ProductPage";
import Contact from "../pages/Contact";

import Login from "../pages/Login";
import Register from "../pages/Register";

// Admin Components
import Dashboard from "../pages/Admin/Dashboard";
import ManageOrders from "../pages/Admin/ManageOrders";
import ManageUsers from "../pages/Admin/ManageUsers";
import AddNewItem from "../pages/Admin/AddNewItem";
import DashboardLayout from "../layouts/DashboardLayout";
import CheckoutPage from "../pages/CheckoutPage";
import Category from "../pages/Category";
import Products from "../pages/Admin/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/CheckOutPage",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />, // Using DashboardLayout as the wrapper for admin routes
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "orders",
        element: <ManageOrders />,
      },
      {
        path: "users",
        element: <ManageUsers />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
