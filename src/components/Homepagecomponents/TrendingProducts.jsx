import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../../../Backend/auth/productApi'; // Import the query hook
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

const TrendingProducts = () => {
  // Use the query hook to fetch products
  const { data: products = [], error, isLoading } = useGetAllProductsQuery(); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (isLoading) {
    return <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>Loading products...</p>;
  }

  if (error) {
    return <p className='font-[Gilroy-Medium] text-xl flex items-center justify-center'>Error loading products: {error.message}</p>;
  }

  return (
    <div>
      <h1 className='text-center text-3xl font-[Gilroy-Bold] mb-2'>Trending Products</h1>
      <p className='text-center text-gray-600'>Explore our latest trending products</p>
      <p className='text-center text-gray-600'>Elevate your style with our latest girls fashion trending products</p>

      {/* Products Card */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-10 lg:px-24 py-16'>
        {products.map((product) => {
          // Determine the number of filled and empty stars based on the product rating
          const filledStars = Math.floor(product.rating);
          const emptyStars = 5 - filledStars;

          return (
            <Link key={product.id} className='w-38 h-38 relative hover:scale-105 transition-all duration-300'>
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
