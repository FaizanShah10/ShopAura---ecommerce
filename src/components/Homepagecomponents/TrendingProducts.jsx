import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../../Backend/auth/productApi'; // Import the query hook
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const TrendingProducts = () => {

  const headingRef = useRef(null)
  const taglineRef = useRef(null)
  const ProductsRef = useRef([])

  



  // Use the query hook to fetch products
  const { data: products = [], error, isLoading } = useGetAllProductsQuery(); 

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
          trigger: '#main', // Trigger the animation when the category section enters the viewport
          start: 'top 70%', // Animation starts when top of the section reaches 80% of the viewport height
          end: 'bottom 50%', // End of animation trigger
        
        }
      }
    );

    gsap.fromTo(
      taglineRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#main', // Trigger the animation when the category section enters the viewport
          start: 'top 70%', // Animation starts when top of the section reaches 80% of the viewport height
          end: 'bottom 50%', // End of animation trigger
          
        }
      }
    );
  }, []);

  useEffect(() => {
    // Animate each category sequentially with ScrollTrigger
    ProductsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    });
  }, [products]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isLoading) {
    return <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>Loading products...</p>;
  }

  if (error) {
    return <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>Error loading products: {error.message}</p>;
  }

  return (
    <div id='main' className='min-h-screen'>
      <h1 ref={headingRef} className='text-center text-3xl font-[Gilroy-Bold] mb-2'>Trending Products</h1>
      <p ref={taglineRef} className='text-center text-gray-600'>Explore our latest trending products <br /> Elevate your style with our latest girls fashion trending products</p>


      {/* Products Card */}
      <div id='trendingProducts' 
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-10 lg:px-24 py-16'>
        {products.map((product, index) => {
          // Determine the number of filled and empty stars based on the product rating
          const filledStars = Math.floor(product.rating);
          const emptyStars = 5 - filledStars;

          return (
            <Link 
            key={product.id} 
            className='w-38 h-38 relative hover:scale-105 transition-all duration-300'
            ref={(el) => (ProductsRef.current[index] = el)}
            >
              <img onClick={() => navigate(`/product/${product._id}`)} className='h-56 w-96 object-cover rounded-sm' src={product.image} alt={product.name} />
              <div className='absolute top-3 right-3'>
                <button className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                  <i onClick={() => dispatch(addToCart(product))} className='text-white'><MdOutlineShoppingCart /></i>
                </button>
              </div>
              <div onClick={() => navigate(`/product/${product._id}`)} className='text-center mt-4'>
                <p className='font-[Gilroy-Medium] font-semibold'>{product.name}</p>

                {/* Price Display */}
                <div className='flex gap-2 justify-center'>
                  <p className='font-[Gilroy-Medium]'>${product.price}</p>
                  {product.oldPrice && (
                    <s className='font-[Gilroy-Medium]'>${product.oldPrice}</s>
                  )}
                </div>

                {/* Rating Display */}
                <div className='flex justify-center mt-2'>
                  {Array(filledStars).fill(<HiStar className='text-yellow-500' />)}
                  {Array(emptyStars).fill(<HiOutlineStar className='text-yellow-500' />)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className='flex justify-center mb-10'>
        <Link to={`/shop`} className='hover:bg-red-800 duration-200 px-4 py-2 rounded-md bg-red-700 text-white font-semibold'>Show All Products</Link>
      </div>
    </div>
  );
}

export default TrendingProducts;
