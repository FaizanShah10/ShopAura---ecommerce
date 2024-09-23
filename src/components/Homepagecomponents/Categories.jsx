import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import Accessories from "../../assets/Accessories.jpg";
import Sandles from "../../assets/Sandles.webp";
import Bag from "../../assets/bag.jpg";
import Dress from "../../assets/dress.jpg";
import Jewellery from "../../assets/Jewellery.webp";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const categoriesRef = useRef([]);
  const headingRef = useRef(null)

  const categoriesData = [
    {
      id: 1,
      image: Accessories,
      path: 'accessories',
      title: "Accessories",
    },
    {
      id: 2,
      image: Sandles,
      path: 'sandles',
      title: "Sandles",
    },
    {
      id: 3,
      image: Bag,
      path: 'bags',
      title: "Bags",
    },
    {
      id: 4,
      image: Dress,
      path: 'dress',
      title: "Dress",
    },
    {
      id: 5,
      image: Jewellery,
      path: 'jewellery',
      title: "Jewellery",
    },
  ];

  useEffect(() => {
    // Set up the animation with ScrollTrigger
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current, // Trigger the animation when the category section enters the viewport
          start: 'top 70%', // Animation starts when top of the section reaches 80% of the viewport height
          end: 'bottom 50%', // End of animation trigger
          toggleActions: 'play none none none', // Only play once
        }
      }
    );
  }, []);

  useEffect(() => {
    // Set up the animation with ScrollTrigger
    gsap.fromTo(
      categoriesRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: categoriesRef.current, // Trigger the animation when the category section enters the viewport
          start: 'top 80%', // Animation starts when top of the section reaches 80% of the viewport height
          end: 'bottom 60%', // End of animation trigger
          toggleActions: 'play none none none', // Only play once
        }
      }
    );
  }, []);

  return (
    <div className='max-w-[60vw] mx-auto'>
      <h2 
      ref={headingRef}
      className='text-center p-16 text-3xl font-semibold font-[Gilroy-Medium]'>Categories</h2>

      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-0 gap-20 font-[Gilroy-Medium]'
        ref={categoriesRef} // Reference for the entire section to trigger the animation
      >
        {categoriesData.map((category, index) => (
          <Link
            to={`categories/${category.path}`}
            key={category.id}
            className='flex flex-col items-center hover:scale-105 transition-all duration-300'
            ref={(el) => (categoriesRef.current[index] = el)} // Assign ref to each category element
          >
            <div className='w-28 h-28 shadow-md rounded-full relative overflow-hidden'>
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>
            <p className='text-center mt-4'>{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
