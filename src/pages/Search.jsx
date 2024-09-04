import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Products from '../../public/Products.json';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { Link } from 'react-router-dom';

import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';

const Search = () => {
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Show 20 items per page

  const handleChangeInput = (e) => {
    setInput(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter items based on the search input
  const filteredItems = Products.filter((product) =>
    product.name.toLowerCase().includes(input.toLowerCase())
  );

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className='w-full min-h-screen bg-gray-200 flex flex-col justify-center items-center'>
        <h2 className='text-center text-3xl font-[Gilroy-Bold] py-10'>Search Products</h2>

        <input
          type='text'
          placeholder='Search'
          onChange={handleChangeInput}
          value={input}
          className='lg:w-[30vw] md:w-[40vw] w-[70vw] py-2 rounded-full px-3'
        />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-10 lg:px-24 py-16'>
          {currentItems.map((product) => {
            // Determine the number of filled and empty stars based on the product rating
            const filledStars = Math.floor(product.rating);
            const emptyStars = 5 - filledStars;

            return (
              <Link to={`/shop/${product.id}`} key={product.id} className='w-38 h-38 relative hover:scale-105 transition-all duration-300'>
                <img className='h-56 w-96 object-cover rounded-sm' src={product.image} alt={product.name} />
                <div className='absolute top-3 right-3'>
                  <button className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                    <i className='text-white'><MdOutlineShoppingCart /></i>
                  </button>
                </div>
                <div className='text-center mt-4'>
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

        {/* Pagination */}
        <Stack spacing={2} alignItems='center' marginTop={4} marginBottom={4}>
          <Pagination
            count={Math.ceil(filteredItems.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color='secondary'
          />
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default Search;
