import React from 'react'
import "../App.css"

import bagImage1 from "../assets/Bag-1.png"

const Banner = () => {
  return (
    <>
        <div className='w-screen h-[35vw] overflow-hidden bg-[#57B5B6] relative'>
            <div className='pl-32'>
                <h2 className='text-6xl font-semibold top-[45%] absolute text-[#C76701] font-[Gilroy-Bold]'>Elevate Your Lifestyle</h2>
                <h3 className='text-lg font-semibold absolute text-black top-[56%] font-[Gilroy-Medium]'>Find the Perfect Blend of Style, Quality, <br/> and Affordability!</h3>
            </div>
            <div className='w-[25%] h-full absolute right-40 '>
                <img className='w-full h-[100%] top-10' src={bagImage1} alt="" />
            </div>
        </div>
    </>
  )
}

export default Banner