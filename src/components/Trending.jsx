import React from 'react'

import CasualShirts from "../assets/CasualShirts.jpg"
import Gymwear from "../assets/Gymwear.webp"
import Bag from "../assets/bag.jpg"


const Trending = () => {
  return (
    <div className='mt-24 min-h-screen lg:h-auto pb-20 '>
        <h1 className='text-center text-3xl font-semibold font-[Gilroy-Medium]'>Trending</h1>
        <p className='text-center font-[Gilroy-Medium] lg:mb-10'>Have a Look at what's trending on ShopAura</p>

        <div className='flex flex-col lg:flex-row justify-center lg:gap-20 gap-4 w-full min-h-screen lg:h-[34vw] p-16 lg:p-0'>
            {/* First Div */}
            <div className='w-full lg:w-[20%] lg:h-96 h-96 bg-black p-4 rounded-md'>
                <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={CasualShirts} alt="" />
                </div>
                <h2 className='text-white'>Casual Shirts</h2>

                <div className='flex text-white justify-between'>
                    <p className='text-sm'>Price: $$</p>
                    <p className='text-sm'>Add to Cart</p>
                </div>
            </div>

            {/* Second Div */}
            <div className='w-full lg:w-[20%] lg:h-[32vw] h-96 lg:mt-6 bg-black p-4 rounded-md'>
                <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden'>
                    <img src={Gymwear} alt="" />
                </div>
                <h2 className='text-white'>Gym Wear Suit</h2>

                <div className='flex text-white justify-between'>
                    <p className='text-sm'>Price: $$</p>
                    <p className='text-sm'>Add to Cart</p>
                </div>
            </div>

            {/* Third Div */}
            <div className='w-full lg:w-[20%] lg:h-[32vw] h-96 lg:mt-20 bg-black p-4 rounded-md relative bottom-0'>
                <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={Bag} alt="" />
                </div>
                <h2 className='text-white'>Timeless Offwhite bag</h2>

                <div className='flex text-white justify-between'>
                    <p className='text-sm'>Price: $$</p>
                    <p className='text-sm'>Add to Cart</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trending