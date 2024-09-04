import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

const PromoBanner = () => {
  return (
    <div className='p-20'>
      <div className='flex flex-col lg:flex-row justify-center gap-20'>
        <div className='flex flex-col items-center'>
          <TbTruckDelivery className='w-7 h-7 mb-6 text-red-700'/>
          <h3 className='text-lg font-semibold'>Free Delivery</h3>
          <p className='text-center text-sm'>Offer convenient and ability <br />to shop from anywhere anytime</p>
        </div>
        <div className='flex flex-col items-center'>
          <RiMoneyDollarCircleFill className='w-7 h-7 mb-6 text-red-700'/>
          <h3 className='text-lg font-semibold'>Money Back gauranteed</h3>
          <p className='text-center text-sm'>30-Day Money Back Guarantee: <br /> Shop Risk-Free!</p>
        </div>
        <div className='flex flex-col items-center'>
          <RiCustomerService2Fill  className='w-7 h-7 mb-6 text-red-700'/>
          <h3 className='text-lg font-semibold'>Customer Support</h3>
          <p className='text-center text-sm'>Get Assistance 24/7: <br /> Contact Us for Any Queries!</p>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner