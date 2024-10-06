import React from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiOutlineShop } from 'react-icons/ai';
import { HiOutlineUsers, HiOutlineHome, HiOutlineClipboardList } from 'react-icons/hi';
import { MdAddCircleOutline } from "react-icons/md";
import { IoShirtOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useLogoutUserMutation } from '../../../Backend/auth/cartApi';

const DashboardLayout = () => {
  const [logoutUser] = useLogoutUserMutation()
  const location = useLocation(); // Get current location
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const adminNavigation = [
    { to: '/admin/dashboard', icon: <AiOutlineShop />, label: 'Dashboard' },
    { label: 'Users', icon: <HiOutlineUsers />, to: '/admin/users' },
    { label: 'Orders', icon: <HiOutlineClipboardList />, to: '/admin/orders' },
    { label: 'Products', icon: <IoShirtOutline />, to: '/admin/products' },
    { label: 'Add New Product', icon: <MdAddCircleOutline />, to: '/admin/add-new-product' },
  ];

  const usefulLinks = [
    { label: 'Home', icon: <HiOutlineHome />, to: '/' },
    { label: 'Logout', icon: <RiLogoutCircleLine />, to: '/logout' },
  ];

  // Function to check if navItem is active
  const isActive = (path) => location.pathname === path;

  // Handle logout and navigate to home
  const handleLogout = () => {
    
    dispatch(logoutUser()); // Dispatch logout action
    navigate('/'); // Navigate to home after logout
  };

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
              {/* If the link is "Logout", handle the click event */}
              {links.label === 'Logout' ? (
                <h2
                  className='w-full flex items-center justify-center gap-2 px-3 py-3 text-center cursor-pointer rounded-lg font-[Gilroy-Medium] bg-gray-300 text-gray-800 hover:bg-gray-400'
                  onClick={handleLogout}
                >
                  <span>{links.icon}</span>{links.label}
                </h2>
              ) : (
                <Link to={links.to}>
                  <h2
                    className={`w-full flex items-center justify-center gap-2 px-3 py-3 text-center cursor-pointer rounded-lg font-[Gilroy-Medium]
                    ${isActive(links.to) ? 'bg-red-700 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
                  >
                    <span>{links.icon}</span>{links.label}
                  </h2>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-grow p-5 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
