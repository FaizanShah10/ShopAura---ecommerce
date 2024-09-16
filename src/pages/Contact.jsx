import React from 'react'
import CustomerSupport from '../assets/customersupport.jpg'

const Contact = () => {
  return (
    <div>
      <div className='w-full lg:h-[20vw] md:h-[30vw] sm:h-[30vw] h-50vw relative'>
        <img className='w-full h-full object-cover' src={CustomerSupport} alt="" />
        <h2 className='absolute inset-0 lg:p-20 text-center pt-20 font-[Gilroy-Bold] lg:text-7xl text-3xl text-white'>Customer Support</h2>
      </div>

      <div className='flex lg:flex-row md:flex-row flex-col justify-center gap-20 m-10'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-[Gilroy-Medium]'>How can we help?</h2>
          <a href='#' className='text-gray-400 font-[Gilroy-Medium]'>FAQs</a>
          <a href='#' className='text-gray-400 font-[Gilroy-Medium]'>Ordering</a>
          <a href='#' className='text-gray-400 font-[Gilroy-Medium]'>Shipping</a>
          <a href='#' className='text-gray-400 font-[Gilroy-Medium]'>Returns & Exchanges</a>
          <a href='#' className='text-gray-400 font-[Gilroy-Medium]'>International</a>
        </div>
        <div>
          <h2 className='font-[Gilroy-Medium] text-4xl pb-10 text-center'>Contact Us</h2>
          <input type="text" placeholder='Subject' className='border-b-2 pb-3 text-sm w-full mb-5 font-[Gilroy-Medium] outline-none'/>
          <input type="text" placeholder='Name' className='border-b-2 pb-3 text-sm w-full mb-5 font-[Gilroy-Medium] outline-none' />
          <input type="email" placeholder='Email' className='border-b-2 pb-3 text-sm w-full mb-5 font-[Gilroy-Medium] outline-none'/>
          <input type="submit" value="Submit" className='bg-zinc-800 text-white font-[Gilroy-Medium] rounded-sm px-4 py-2 pb-3 text-sm w-full cursor-pointer hover:bg-zinc-900  '/>
          
        </div>
        <div className='flex flex-col gap-4'>
        <h2 className='font-[Gilroy-Medium]'>Supporting Hours</h2>
          <a className='text-gray-400 font-[Gilroy-Medium]'>Mon-Fri 9:00am - 5:00pm</a>
          <a className='text-gray-400 font-[Gilroy-Medium] '>Looking for more info on products, <br /> shipping, fabric and more?</a>
          <a className='text-gray-400 font-[Gilroy-Medium]'>View FAQs</a>
         
        </div>
      </div>
    </div>
  )
}

export default Contact