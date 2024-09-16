import React, { useEffect, useState } from 'react';
// import Products from "../../public/Products.json";

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import { useGetAllProductsQuery } from '../../../Backend/auth/productApi';

const filters = {
  
  categories: ['all', 'accessories', 'dress', 'cosmetics', 'jewellery'],
  colors: ['all', 'red', 'gold', 'pink', 'black', 'blue', 'Silver'],
  priceRange: [
    { label: "All", min: 0, max: Infinity },
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - $300", min: 200, max: 300 },
    { label: "$300 - $400", min: 300, max: 400 },
    { label: "$500 - Above", min: 500, max: Infinity }
  ]
}

const Shop = () => {

  const { data: products = [], error, isLoading } = useGetAllProductsQuery(); 

  const navigate = useNavigate() 
  const dispatch = useDispatch();

  
  

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    // Scroll to top when page changes for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-full min-h-screen bg-white'>
      <h2 className='text-center text-3xl font-[Gilroy-Bold] pt-4'>Shop</h2>

      <div className='flex flex-col lg:flex-row'>
     
        {/* Products Section */}
        <div className='w-full  bg-white shadow-lg'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-8 py-8'>
            {products.length > 0 ? (
              products.map((product) => {
                const filledStars = Math.floor(product.rating);
                const emptyStars = 5 - filledStars;

                return (
                  <Link  key={product._id} className='relative hover:scale-105 transition-transform duration-300'>
                    <img
                      onClick={() => navigate(`/product/${product._id}`)}
                      className='w-full h-48 object-cover rounded-sm'
                      src={product.image}
                      alt={product.name}
                    />

                    <div className='absolute top-3 right-3'>
                      <button onClick={() => dispatch(addToCart(product))} className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                        <MdOutlineShoppingCart className='text-white' />
                      </button>
                    </div>

                    <div onClick={() => navigate(`/product/${product.id}`)} className='text-center mt-4 px-2'>
                      <p className='text-sm font-semibold font-[Gilroy-Bold]'>{product.name}</p>
                      <div className='flex justify-center items-center space-x-1 mt-2'>
                        {[...Array(filledStars)].map((_, i) => (
                          <HiStar className='text-yellow-500' key={`filled-${i}`} />
                        ))}
                        {[...Array(emptyStars)].map((_, i) => (
                          <HiOutlineStar className='text-yellow-500' key={`empty-${i}`} />
                        ))}
                      </div>
                      <p className='mt-1 text-sm font-semibold font-[Gilroy-Medium]'>${product.price}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className='col-span-full text-center text-gray-500'>No products found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {products.length > itemsPerPage && (
        <Stack spacing={2} alignItems='center' className='py-8'>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)} 
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Stack>
      )}
    </div>
  );
};

export default Shop;
