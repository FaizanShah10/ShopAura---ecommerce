import React from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";

const DashboardLayout = () => {
  const location = useLocation(); // Get current location

  const adminNavigation = [
    { to: '/admin/dashboard', icon: <AiOutlineShop />, label: 'Dashboard' },
    { label: 'Users', icon: <HiOutlineUsers />, to: '/admin/users' },
    { label: 'Orders', icon: <HiOutlineClipboardList />, to: '/admin/orders' },
    { label: 'Products', icon: <IoShirtOutline />, to: '/admin/products' },
    { label: 'Add New Product', icon: <IoIosAddCircleOutline  />, to: '/admin/add-new-product' },

  ];

  const usefulLinks = [
    { label: 'Home', icon: <HiOutlineHome />, to: '/' },
    { label: 'Logout', icon: <RiLogoutCircleLine />, to: '/logout' },
  ];

  // Function to check if navItem is active
  const isActive = (path) => location.pathname === path;

  return (
    // Set a flex container for sidebar and content
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className='w-72 px-5 h-screen bg-gray-200 flex flex-col justify-center gap-20'>
        {/* Admin Navigation Section */}
        <div className='flex flex-col items-center'>
          {adminNavigation.map((navItem, index) => (
            <div className='py-2 w-full' key={index}>
              <Link to={navItem.to}>
                <h2
                  className={`w-full flex items-center justify-center gap-2 px-3 py-3 text-center cursor-pointer rounded-lg font-[Gilroy-Medium] 
                  ${isActive(navItem.to) ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
                >
                  <span>{navItem.icon}</span>{navItem.label}
                </h2>
              </Link>
            </div>
          ))}
        </div>

        {/* Space between sections */}
        <div className='my-4'></div>

        {/* Useful Links Section */}
        <div className='flex flex-col items-center'>
          {usefulLinks.map((links, index) => (
            <div className='py-2 w-full' key={index}>
              <Link to={links.to}>
                <h2
                  className={`w-full flex items-center justify-center gap-2 px-3 py-3 text-center cursor-pointer rounded-lg font-[Gilroy-Medium]
                  ${isActive(links.to) ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
                >
                  <span>{links.icon}</span>{links.label}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-grow p-5 bg-white">
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout;
