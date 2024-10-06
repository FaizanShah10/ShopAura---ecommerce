import Transition from '../components/transition/Transition';  // Import the Transition component
import {createBrowserRouter} from 'react-router-dom'

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
import Dashboard from "../pages/AdminDashboard/Dashboard";
import ManageOrders from "../pages/AdminDashboard/ManageOrders";
import ManageUsers from "../pages/AdminDashboard/ManageUsers";
import AddNewItem from "../pages/AdminDashboard/AddNewItem";
import DashboardLayout from "../layouts/DashboardLayout";
import CheckoutPage from "../pages/CheckoutPage";
import Category from "../pages/Category";
import Products from "../pages/AdminDashboard/Products";
import EditProduct from "../pages/AdminDashboard/EditProduct";
import Orders from "../pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
        path: "/",
        element: (
          <Transition>
            <Home />
          </Transition>
        )
      },
      {
        path: "/contact",
        element: (
          <Transition>
            <Contact />
          </Transition>
        ),
      },
      {
        path: "/shop",
        element: (
          <Transition>
            <Shop />
          </Transition>
        ),
      },
      {
        path: "/category",
        element: (
          <Transition>
            <Category />,
          </Transition>
        )
      },
      {
        path: "/search",
        element: (
          <Transition>
            <Search />
          </Transition>
        )
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
      {
        path: '/orders',
        element: <Orders />,
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
    path: "/edit-product/:productId",
    element: <EditProduct />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
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
      {
        path: "add-new-product",
        element: <AddNewItem />,
      },
    ],
  },
]);

export default router;
