import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart, updateCartItems} from '../redux/features/cartSlice'



const Navbar = () => {

    const dispatch = useDispatch()

    // Access cart data from Redux
    const { cartItems, totalProducts, totalAmount, tax, grandTotal } = useSelector((state) => state.cart);

    const [showMenu, setShowMenu] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState(cartItems)

    


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleRemoveItems = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleUpdateCart = (id, newQuantity) => {
        dispatch(updateCartItems({id, quantity: newQuantity}))
    }

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

                            <button onClick={toggleCart} id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 hover:text-white dark:hover:bg-[#9A0000] text-sm font-medium leading-none text-black dark:text-black">
                                <span className="sr-only">Cart</span>
                                <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                                </svg>
                                <sup className='w-3 h-3 flex items-center justify-center bg-red-700 text-white rounded-full font-[Gilroy-Medium]'>{totalProducts}</sup>
                                {/* <span className="hidden sm:flex">My Cart</span> */}
                            </button>

                            <button id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-[#9A0000] hover:text-white text-sm font-medium leading-none text-black dark:text-black">
                                <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                </svg>
                                Account
                            </button>

                            <button onClick={handleShowMenu} type="button" aria-controls="ecommerce-navbar-menu-1" aria-expanded={showMenu} className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-[#9A0000] hover:text-white p-2 text-black dark:text-black">
                                <span className="sr-only">Open Menu</span>
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
                                <a href="/" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="hover:text-[#9A0000] dark:hover:text-[#9A0000]">Shop</a>
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

            {isCartOpen && (
                <div className={`fixed z-[100] mt-[80px] bg-black bg-opacity-80 inset-0 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{transition: 'opacity 300ms'}}
                >
                    <div className={`fixed mt-[80px] right-0 top-0 bg-white md:w-1/3 w-full h-full overflow-y-auto transition-transform ${isCartOpen ? 'translate-x-100' : 'translate-x-0'}`}
                    style={{transition: 'transform 300ms cubic-bazier(0.25, 0.46, 0.45, 0.94)'}}
                    >
                        <div className='p-4'>
                            <h2 className='text-lg font-[Gilroy-Bold]'>Cart</h2>
                        </div>

                        {/* Products in cart */}
                        {
                            cartItems.length === 0 ? (
                                <div className='px-4 font-[Gilroy-Medium]'>No Items in Cart</div>
                            ) : (
                                <>
                                  <div className='px-4'>
                                    {
                                        cartItems.map((item, index) => (
                                            <div key={index} className='flex shadow-md p-4 rounded-md'>
                                                <p className='font-semibold'>{index + 1}</p>
                                                <img className='w-20 h-20 object-cover ml-3 rounded-md' src={item.image} alt="" />

                                                <div className='flex flex-col ml-6 mt-2'>
                                                    <p className='font-[Gilroy-Bold] '>{item.name}</p>
                                                    <p className='text-gray-700 text-sm'>${item.price}</p>
                                                </div>

                                                <div className='flex gap-2 mt-3 ml-10'>
                                                    <button onClick={() => handleUpdateCart(item.id, item.quantity - 1)} className='w-5 h-5 flex items-center justify-center rounded-full bg-red-700 text-white'>-</button>
                                                    <p>{item.quantity}</p>
                                                    <button onClick={() => handleUpdateCart(item.id, item.quantity + 1)} className='w-5 h-5 flex items-center justify-center rounded-full bg-red-700 text-white'>+</button>
                                                </div>

                                                <p onClick={() => handleRemoveItems(item.id)} className='text-sm text-red-500 mt-3 ml-10 cursor-pointer'>Remove</p>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* Order Summary */}
                                <div className='p-6 bg-red-700'>
                                    <div className='bg-white p-2 rounded-md'>
                                    <h2 className=' font-[Gilroy-Bold] text-lg pb-2'>Order Summary</h2>
                                    <p className='font-[Gilroy-Medium]'>Selected Items: {totalProducts}</p>
                                    <p className='font-[Gilroy-Medium]'>Total Price: ${totalAmount.toFixed(2)}</p>
                                    <p className='font-[Gilroy-Medium]'>Tax: ${tax.toFixed(2)}</p>
                                    <p className='font-[Gilroy-Medium]'>Grand Total: {grandTotal.toFixed(2)}</p>
                                    <button className='mt-3 w-full py-2 rounded-md bg-green-700 hover:bg-green-800 text-white font-[Gilroy-Medium] text-center'>Proceed to Checkout</button>
                                    </div>
                                </div>
                                </>

                                
                            )
                        }
                    </div>

                    
                </div>

                
            )}
        </>
    );
};

export default Navbar;
