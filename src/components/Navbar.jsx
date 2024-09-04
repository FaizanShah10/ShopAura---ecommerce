import React, { useState } from 'react';

import { IoSearch } from "react-icons/io5";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className="bg-[#E9DCD3] shadow-md antialiased z-10 w-full">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
                    <div className="flex items-center justify-between">

                        <div className="flex items-center space-x-8">
                            <div className="shrink-0">
                                <a href="/" title="" className="">
                                    <h2 className="text-black font-semibold text-2xl">SHOP AURA</h2>
                                </a>
                            </div>

                            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                                <li>
                                    <a href="/" title="" className="flex text-sm font-medium text-black hover:text-primary-700 dark:text-black dark:hover:text-[#9A0000]">
                                        Home
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="/shop" title="" className="flex text-sm font-medium text-black hover:text-primary-700 dark:text-black dark:hover:text-[#9A0000]">
                                        Shop
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="#" title="" className="flex text-sm font-medium text-black hover:text-primary-700 dark:text-black dark:hover:text-[#9A0000]">
                                        Categories
                                    </a>
                                </li>
                                <li className="shrink-0">
                                    <a href="#" title="" className="text-sm font-medium text-black hover:text-primary-700 dark:text-black dark:hover:text-[#9A0000]">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center lg:space-x-2">

                            <button className='p-2'>
                                <a href="/search"><IoSearch className='w-4 h-4'/></a>
                            </button>

                            <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 hover:text-white dark:hover:bg-[#9A0000] text-sm font-medium leading-none text-black dark:text-black">
                                <span className="sr-only">
                                    Cart
                                </span>
                                <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                                </svg>
                                <span className="hidden sm:flex">My Cart</span>
                            </button>

                            <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-[#9A0000] hover:text-white text-sm font-medium leading-none text-black dark:text-black">
                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                Account
                            </button>

                            <button onClick={handleShowMenu} type="button" aria-controls="ecommerce-navbar-menu-1" aria-expanded={showMenu} className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-[#9A0000] hover:text-white p-2 text-black dark:text-black">
                                <span className="sr-only">
                                    Open Menu
                                </span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Conditionally apply the "hidden" class based on the state */}
                    <div id="ecommerce-navbar-menu-1" className={`${showMenu ? '' : 'hidden'} bg-gray-50 dark:bg-white dark:border-white border border-gray-200 rounded-lg py-3 px-4 mt-4`}>
                        <ul className="text-black dark:text-black text-sm font-medium space-y-3">
                            <li>
                                <a href="#" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Categories</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
