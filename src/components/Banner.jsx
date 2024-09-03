import React from 'react'
import "../App.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Autoplay } from 'swiper'; // Import Autoplay module


import bagImage1 from "../assets/Bag-1.png"

const Banner = () => {
  return (
    <>
    <Swiper
    spaceBetween={30}
    className="mySwiper"
    autoplay={{
    delay: 5000, // Timer between each slide (5 seconds)
    disableOnInteraction: false, // Autoplay continues even after user interaction
  }}
//   modules={[Autoplay]}
  loop={true}
    >
            <SwiperSlide>
                    <div className='w-screen lg:h-[35vw] md:h-[60vw] h-[50vh] lg:overflow-hidden bg-[#57B5B6] relative '>
                    <div className='lg:pl-32 p-2'>
                        <div className='w-full py-2 bg-white rounded-full px-4 block lg:hidden'>Search</div>

                        <div className='lg:block flex justify-center'>
                        <h2 className='lg:text-6xl md:text-4xl text-3xl text-center md:text-center font-semibold lg:top-[45%] md:top-[16%] top-[20%] absolute text-white font-[Gilroy-Bold]'>
                            Elevate Your Lifestyle
                        </h2>
                        <h3 className='lg:text-lg lg:text-left md:text-lg text-sm font-semibold absolute text-center md:text-center text-black lg:top-[56%] md:top-[24%] top-[29%] font-[Gilroy-Medium]'>
                            Find the Perfect Blend of Style, Quality, <br/> and Affordability!
                        </h3>
                        </div>
                        
                    </div>
                    {/* Hidden on Mobile */}
                    <div className='lg:block md:flex md:justify-center'>
                        <div className='lg:w-[25%] lg:h-full md:w-[30%] md:h-[40vh] w-[40%] h-[55%] lg:top-2 top-40  left-28 lg:absolute lg:left-[65vw] md:left-[35vw] absolute lg:block md:block'>
                            <img className='w-full h-[100%] lg:top-10 ' src={bagImage1} alt="" />
                        </div>
                    </div>

                    </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className='w-screen lg:h-[35vw] md:h-[60vw] h-[50vh] lg:overflow-hidden bg-[#57B5B6] relative '>
                    <div className='lg:pl-32 p-2'>
                        <div className='w-full py-2 bg-white rounded-full px-4 block lg:hidden'>Search</div>

                        <div className='lg:block flex justify-center'>
                        <h2 className='lg:text-6xl md:text-4xl text-3xl text-center md:text-center font-semibold lg:top-[45%] md:top-[16%] top-[20%] absolute text-white font-[Gilroy-Bold]'>
                            Elevate Your Lifestyle
                        </h2>
                        <h3 className='lg:text-lg lg:text-left md:text-lg text-sm font-semibold absolute text-center md:text-center text-black lg:top-[56%] md:top-[24%] top-[29%] font-[Gilroy-Medium]'>
                            Find the Perfect Blend of Style, Quality, <br/> and Affordability!
                        </h3>
                        </div>
                        
                    </div>
                    {/* Hidden on Mobile */}
                    <div className='lg:block md:flex md:justify-center'>
                        <div className='lg:w-[25%] lg:h-full md:w-[30%] md:h-[40vh] w-[40%] h-[55%] lg:top-2 top-40  left-28 lg:absolute lg:left-[65vw] md:left-[35vw] absolute lg:block md:block'>
                            <img className='w-full h-[100%] lg:top-10 ' src={bagImage1} alt="" />
                        </div>
                    </div>

                    </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className='w-screen lg:h-[35vw] md:h-[60vw] h-[50vh] lg:overflow-hidden bg-[#57B5B6] relative '>
                    <div className='lg:pl-32 p-2'>
                        <div className='w-full py-2 bg-white rounded-full px-4 block lg:hidden'>Search</div>

                        <div className='lg:block flex justify-center'>
                        <h2 className='lg:text-6xl md:text-4xl text-3xl text-center md:text-center font-semibold lg:top-[45%] md:top-[16%] top-[20%] absolute text-white font-[Gilroy-Bold]'>
                            Elevate Your Lifestyle
                        </h2>
                        <h3 className='lg:text-lg lg:text-left md:text-lg text-sm font-semibold absolute text-center md:text-center text-black lg:top-[56%] md:top-[24%] top-[29%] font-[Gilroy-Medium]'>
                            Find the Perfect Blend of Style, Quality, <br/> and Affordability!
                        </h3>
                        </div>
                        
                    </div>
                    {/* Hidden on Mobile */}
                    <div className='lg:block md:flex md:justify-center'>
                        <div className='lg:w-[25%] lg:h-full md:w-[30%] md:h-[40vh] w-[40%] h-[55%] lg:top-2 top-40  left-28 lg:absolute lg:left-[65vw] md:left-[35vw] absolute lg:block md:block'>
                            <img className='w-full h-[100%] lg:top-10 ' src={bagImage1} alt="" />
                        </div>
                    </div>

                    </div>
            </SwiperSlide>
            

    </Swiper>
        
    </>
  )
}

export default Banner
