import React from 'react'
import HangingClothes from "../assets/clothes-hanged.jpg"

const Blogs = () => {
  return (
    <div>
      
      <h1 className='text-center font-[Gilroy-Bold] lg:px-32 px-1 py-8 text-2xl lg:text-3xl'>Latest From Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 bg-zinc-200 p-12 place-items-center'>
      <div class="lg:max-w-[20vw] w-full bg-white border  rounded-lg shadow ">
          <a href="#">
              <img class="rounded-t-lg" src={HangingClothes} alt="" />
          </a>
          <div class="p-5">
            <p className='text-red-600 text-center text-sm'>Timeless Elegance</p>
              <a href="#">
                  <h5 class="mb-2 text-lg font-[Gilroy-Bold] text-center tracking-tight text-black dark:text-black">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class=" font-[Gilroy-Medium] text-sm text-center  dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </div>
      <div class="lg:max-w-[20vw] w-full bg-white border  rounded-lg shadow ">
          <a href="#">
              <img class="rounded-t-lg" src={HangingClothes} alt="" />
          </a>
          <div class="p-5">
            <p className='text-red-600 text-center text-sm'>Timeless Elegance</p>
              <a href="#">
                  <h5 class="mb-2 text-lg font-[Gilroy-Bold] text-center tracking-tight text-black dark:text-black">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class=" font-[Gilroy-Medium] text-sm text-center  dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </div>
      <div class="lg:max-w-[20vw] w-full bg-white border  rounded-lg shadow ">
          <a href="#">
              <img class="rounded-t-lg" src={HangingClothes} alt="" />
          </a>
          <div class="p-5">
            <p className='text-red-600 text-center text-sm'>Timeless Elegance</p>
              <a href="#">
                  <h5 class="mb-2 text-lg font-[Gilroy-Bold] text-center tracking-tight text-black dark:text-black">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class=" font-[Gilroy-Medium] text-sm text-center  dark:text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
      </div>

      </div>
    </div>
  )
}

export default Blogs