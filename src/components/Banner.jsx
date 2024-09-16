import React, { useRef } from 'react'
import "../App.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bagImage1 from "../assets/Bag-1.png"
import BannerImg1 from '../assets/BannerImg1.webp'
import BannerImg2 from '../assets/BannerImg2.jpg'

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1500} 
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                loop={true}
            >
                <SwiperSlide>
                    <div className="w-screen h-screen  relative">
                        <img className="w-full h-full object-cover" src={BannerImg1} alt="" />

                        {/* Text content that will be centered */}
                        <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center">
                            <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl text-center font-[Gilroy-Bold]">Elevate your Life Style</h1>
                            <a href='/shop' className='px-10 py-3 bg-transparent border-white border-[1px] rounded-sm text-white font-[Gilroy-Medium] hover:bg-white hover:text-black transition-all duration-300'>Shop</a>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-screen h-screen relative">
                        <img className="w-full h-full object-cover" src={BannerImg2} alt="" />

                        {/* Text content that will be centered */}
                        <div className="absolute inset-0 flex flex-col gap-3 justify-center items-center">
                            <h1 className="text-white lg:text-5xl md:text-5xl sm:text-3xl text-2xl text-center font-[Gilroy-Bold]">Shop the trending products</h1>
                            <a href='#trendingProducts' className='px-10 py-3 bg-transparent border-white border-[1px] rounded-sm text-white font-[Gilroy-Medium] hover:bg-white hover:text-black transition-all duration-300'>Trending Products</a>
                        </div>
                    </div>
                </SwiperSlide>

                <div>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    )
}

export default Banner;
