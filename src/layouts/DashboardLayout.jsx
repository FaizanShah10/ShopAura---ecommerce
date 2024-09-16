import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";

const DashboardLayout = () => {

  const adminNavigation = [
    { to: '/dashboard', icon: <AiOutlineShop />, label: 'Dashboard' },
    { label: 'Users', icon: <HiOutlineUsers />, to: '/dashboard/users' },
    { label: 'Orders', icon: <HiOutlineClipboardList />, to: '/dashboard/orders' },
    { label: 'Products', icon: <IoShirtOutline />, to: '/dashboard/products' },
  ]

  const usefulLinks = [
    { label: 'Home', icon: <HiOutlineHome />, to: '/' },
    { label: 'Logout', icon: <RiLogoutCircleLine />, to: '/logout' },
  ]

  return (
    <div className='w-72 px-5 h-screen bg-gray-200 flex flex-col justify-center gap-20'>
      
      {/* Admin Navigation Section */}
      <div className='flex flex-col items-center'>
        {
          adminNavigation.map((navItem, index) => (
            <div className='py-2 w-full' key={index}>
              <Link to={navItem.to}>
                <h2 className='w-full flex items-center justify-center gap-2 px-3 py-3 text-center bg-red-700 hover:bg-red-800 cursor-pointer rounded-lg text-white font-[Gilroy-Medium]'>
                  <span>{navItem.icon}</span>{navItem.label}
                </h2>
              </Link>
            </div>
          ))
        }
      </div>

      {/* Space between sections */}
      <div className='my-4'></div>

      {/* Useful Links Section */}
      <div className='flex flex-col items-center'>
        {
          usefulLinks.map((links, index) => (
            <div className='py-2 w-full' key={index}>
              <Link to={links.to}>
                <h2 className='w-full flex items-center justify-center gap-2 px-3 py-3 text-center bg-red-700 hover:bg-red-800 cursor-pointer rounded-lg text-white font-[Gilroy-Medium]'>
                  <span>{links.icon}</span>{links.label}
                </h2>
              </Link>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default DashboardLayout
