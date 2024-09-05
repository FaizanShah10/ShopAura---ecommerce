import React from 'react'
import {useParams, Link} from 'react-router-dom'

import { IoIosArrowForward } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import Sandles from '../assets/Sandles.webp'

const ProductPage = () => {
  const  {id} = useParams()
  console.log(id)
  return (
    <div>
      <div className='flex gap-2 px-32 py-6'>
        <Link className='flex items-center underline text-red-700' to={'/'}>Home <span><IoIosArrowForward /></span></Link>
        <Link className='flex items-center underline text-red-700' to={'/shop'}>Shop <span><IoIosArrowForward /></span></Link>
        <Link className='flex items-center text-red-700'>Product Name</Link>
      </div>

      <div className='flex '>
        <div className='w-[32vw] h-[32vw] ml-32'>
          <img className='rounded-md' src={Sandles} alt="" />
        </div>

        <div className='ml-20'>
          <h1 className='text-2xl font-bold  mt-8 font-[Gilroy-Medium]'>Product Name</h1>
          <h2>reviews</h2>
          <p className='mt-10 text-2xl font-[Gilroy-Medium]'>Price</p>
          <p className='font-[Gilroy-Medium] mt-10 mb-2'>Sizes</p>
          {/* size buttons */}
          <div className='flex flex-wrap gap-2'>
            <button className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all  duaration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>39</button>
            <button className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all duaration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>40</button>
            <button className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all duaration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>41</button>
            <button className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all duaration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>42</button>
            <button className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all duaration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>43</button>
          </div>

          {/* Description */}
          <h2 className='font-[Gilroy-Medium] text-xl mt-6'>Description</h2>
          <div className='w-[30vw] mt-2'>
            <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum aspernatur unde eaque omnis quia voluptatum numquam pariatur voluptatibus facere.</p>
          </div>

          {/* Cart Button */}
          <div className='mt-4'>
            <button className='bg-red-700 rounded-md flex items-center justify-center w-[25vw] py-3 text-white gap-2'><span><FaShoppingBag /></span>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className='mt-16 px-32'>
        <h2 className='text-xl font-[Gilroy-Medium]'>Reviews</h2>
        
        
      </div>
    </div>
  )
}

export default ProductPage