import React, { useEffect, useRef } from 'react';
import CasualShirts from "../../assets/CasualShirts.jpg";
import Gymwear from "../../assets/Gymwear.webp";
import Bag from "../../assets/bag.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Trending = () => {
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const itemRefs = useRef([]); // Ref for the item divs

  useEffect(() => {
    // Animate heading and tagline
    gsap.from(headingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#trending',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(taglineRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#trending',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animate item divs sequentially
    itemRefs.current.forEach((el, index) => {
      gsap.from(el, {
        y: 200,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#trending',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div
      id='trending' 
      className='mt-24 min-h-screen lg:h-auto pb-20'>
      <h1 
        ref={headingRef} // Reference for the heading
        className='text-center text-3xl font-semibold font-[Gilroy-Medium]'>Trending</h1>
      <p
        ref={taglineRef} // Reference for the tagline
        className='text-center font-[Gilroy-Medium] lg:mb-10'>Have a Look at what's trending on ShopAura</p>

      <div className='flex flex-col lg:flex-row justify-center lg:gap-20 gap-4 w-full min-h-screen lg:h-[34vw] p-16 lg:p-0'>
        {/* First Div */}
        <div 
          ref={el => itemRefs.current[0] = el} // Assign ref to the first item
          className='w-full lg:w-[20%] lg:h-96 h-96 border-black border shadow-md p-4 rounded-md hover:scale-105 duration-300 transition-all'>
          <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden shadow-md'>
            <img className='w-full h-full object-cover' src={CasualShirts} alt="Casual Shirts" />
          </div>
          <h2 className='text-black'>Casual Shirts</h2>
          <div className='flex text-black justify-between'>
            <p className='text-sm'>Price: $$</p>
            <p className='text-sm'>Add to Cart</p>
          </div>
        </div>

        {/* Second Div */}
        <div 
          ref={el => itemRefs.current[1] = el} // Assign ref to the second item
          className='w-full lg:w-[20%] lg:h-[32vw] h-96 lg:mt-6 shadow-md border border-black p-4 rounded-md hover:scale-105 duration-300 transition-all'>
          <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden shadow-md'>
            <img src={Gymwear} alt="Gym Wear Suit" />
          </div>
          <h2 className='text-black'>Gym Wear Suit</h2>
          <div className='flex text-black justify-between'>
            <p className='text-sm'>Price: $$</p>
            <p className='text-sm'>Add to Cart</p>
          </div>
        </div>

        {/* Third Div */}
        <div 
          ref={el => itemRefs.current[2] = el} // Assign ref to the third item
          className='w-full lg:w-[20%] lg:h-[32vw] h-96 lg:mt-20 border border-black shadow-md p-4 rounded-md relative bottom-0 hover:scale-105 duration-300 transition-all'>
          <div className='w-full h-[80%] bg-red-300 rounded-md mb-4 overflow-hidden shadow-md'>
            <img className='w-full h-full object-cover' src={Bag} alt="Timeless Offwhite Bag" />
          </div>
          <h2 className='text-black'>Timeless Offwhite Bag</h2>
          <div className='flex text-black justify-between'>
            <p className='text-sm'>Price: $$</p>
            <p className='text-sm'>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
