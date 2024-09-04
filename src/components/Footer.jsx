import React from 'react'

import { FaLocationDot } from "react-icons/fa6";  
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      

<footer class="bg-white dark:bg-white">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <h2 className='text-black text-2xl font-[Gilroy-Bold]'>ShopAura</h2>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Contact info</h2>
                  <ul class="text-gray-500 dark:text-gray-800 font-medium">
                      <li class="mb-4">
                          <p className='flex items-center gap-1 text-sm'><span className='text-red-700'><FaLocationDot /></span>Abbotabad, Pakistan</p>
                      </li>
                      <li className='mb-4'>
                      <p className='flex items-center gap-1 text-sm'><span className='text-red-700'><MdEmail /></span>shopaura@gmail.com</p>
                      </li>
                      <li>
                      <p className='flex items-center gap-1 text-sm'><span className='text-red-700'><FaPhoneAlt /></span>+92 123 456 789</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-800 font-medium">
                      <li class="mb-4">
                      <p className='flex items-center gap-1 text-sm'><span className='text-red-700'><FaInstagram /></span>Instagram</p>
                      </li>
                      <li>
                      <p className='flex items-center gap-1 text-sm'><span className='text-red-700'><BiLogoFacebookSquare /></span>Facebook</p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Usefull Links</h2>
                  <ul class="text-gray-500 dark:text-gray-800 font-medium">
                      <li class="mb-4">
                        <p className='flex items-center gap-1 text-sm'>Help</p>
                      </li>
                      <li class="mb-4">
                        <p className='flex items-center gap-1 text-sm'>Track my order</p>
                      </li>
                      <li class="mb-4">
                        <p className='flex items-center gap-1 text-sm'>Kids</p>
                      </li>
                      <li class="mb-4">
                        <p className='flex items-center gap-1 text-sm'>Women</p>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />   
    </div>
</footer>


    </>
  )
}

export default Footer