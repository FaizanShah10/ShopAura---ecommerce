import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

import { useGetProductByIdQuery } from '../../../Backend/auth/productApi';

import { IoIosArrowForward } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';

import Reviews from '../components/Reviews';

const ProductPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(id);

  const singleProduct = data?.product || {}
  const reviews = data?.reviews || []
  console.log(reviews)

  const dispatch = useDispatch();

  // Loading state
  if (isLoading) {
    return (
      <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>
        Loading products...
      </p>
    );
  }

  // Error state
  if (error) {
    return (
      <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>
        Error loading products: {error.message}
      </p>
    );
  }

  // Check if product data is available before rendering
  if (!singleProduct) {
    return <p className='font-[Gilroy-Medium] text-xl'>No product found</p>;
  }

  // Handle product data
  const filledStars = Math.floor(singleProduct?.rating || 0); // Ensure rating is defined
  const emptyStars = 5 - filledStars;

  return (
    <div>
      <div className='flex gap-2 px-32 py-6'>
        <Link className='flex items-center underline text-red-700' to='/'>
          Home <span>
            <IoIosArrowForward />
          </span>
        </Link>
        <Link className='flex items-center underline text-red-700' to='/shop'>
          Shop <span>
            <IoIosArrowForward />
          </span>
        </Link>
        <span className='flex items-center text-red-700'>
          {singleProduct?.name}
        </span>
      </div>

      {/* Product Section */}
      <div className='flex md:flex-row sm:flex-col flex-col lg:flex-row'>
        <div className='lg:w-[32vw] lg:h-[32vw] sm:w-[60vw] sm:h-[50vw] lg:ml-32 ml-0 lg:p-0 p-10'>
          {singleProduct?.image ? (
            <img className='rounded-md' src={singleProduct.image} alt={singleProduct.name} />
          ) : (
            <p>No image available</p>
          )}
        </div>

        <div className='lg:ml-20 ml-0 p-4 lg:p-0'>
          <h1 className='text-2xl font-bold mt-8 font-[Gilroy-Medium]'>
            {singleProduct?.name}
          </h1>

          {/* Rating Display */}
          <div className='flex mt-2'>
            {Array.from({ length: filledStars }).map((_, index) => (
              <HiStar key={index} className='text-yellow-500' />
            ))}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <HiOutlineStar key={index} className='text-yellow-500' />
            ))}
          </div>

          <p className='mt-10 text-2xl font-[Gilroy-Medium]'>Product ID: {singleProduct?.id}</p>

          {/* Size buttons */}
          <p className='font-[Gilroy-Medium] mt-10 mb-2'>Sizes</p>
          <div className='flex flex-wrap gap-2'>
            {['39', '40', '41', '42', '43'].map((size) => (
              <button key={size} className='px-7 py-1 bg-white border border-b-[1px] text-black hover:bg-red-700 transition-all duration-300 rounded-md hover:text-white font-[Gilroy-Medium]'>
                {size}
              </button>
            ))}
          </div>

          {/* Description */}
          <h2 className='font-[Gilroy-Medium] text-xl mt-6'>Description</h2>
          <div className='lg:w-[30vw] w-full mt-2'>
            <p className='text-gray-500'>{singleProduct?.description}</p>
          </div>

          {/* Add to Cart */}
          <div className='mt-4'>
            <button onClick={() => dispatch(addToCart(singleProduct))} className='bg-red-700 rounded-md flex items-center justify-center lg:w-[25vw] w-full py-3 text-white gap-2'>
              <FaShoppingBag /> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className='mt-16 px-32'>
        <Reviews reviews={reviews}/>
      </div>
    </div>
  );
};

export default ProductPage;
