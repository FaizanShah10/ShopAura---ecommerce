import React, { useEffect, useState } from 'react';
import Products from "../../public/Products.json";

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

const filters = {
  categories: ['all', 'accessories', 'dress', 'cosmetics', 'jewellery'],
  colors: ['all', 'red', 'gold', 'pink', 'black', 'blue'],
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
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(Products);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16

  // Filter states
  const [filterState, setFilterState] = useState({
    category: 'all',
    color: 'all',
    priceRange: 'all',
  });

  // Dropdown visibility states for small screens
  const [dropdownVisible, setDropdownVisible] = useState({
    category: false,
    color: false,
    priceRange: false
  });

  // Toggle dropdown visibility
  const toggleDropdown = (filter) => {
    setDropdownVisible(prevState => ({
      ...prevState,
      [filter]: !prevState[filter]
    }));
  };

  // Apply filters to Products and update filteredProducts state
  const applyFilters = () => {
    let updatedProducts = Products;

    // Filter by category
    if (filterState.category && filterState.category !== 'all') {
      updatedProducts = updatedProducts.filter((product) => product.category === filterState.category);
    }

    // Filter by color
    if (filterState.color && filterState.color !== 'all') {
      updatedProducts = updatedProducts.filter((product) => product.color === filterState.color);
    }

    // Filter by price range
    if (filterState.priceRange && filterState.priceRange !== 'all') {
      const selectedRange = filters.priceRange.find(range => range.label === filterState.priceRange);
      if (selectedRange) {
        updatedProducts = updatedProducts.filter(
          (product) => product.price >= selectedRange.min && product.price <= selectedRange.max
        );
      }
    }

    // Update the filtered products state
    setFilteredProducts(updatedProducts);

    // Reset to first page whenever filters change
    setCurrentPage(1);
  }

  // Apply filters whenever filterState changes
  useEffect(() => {
    applyFilters();
  }, [filterState]);

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

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
        {/* Sidebar for large screens */}
        <div className='hidden lg:block lg:w-1/4 bg-white py-8 px-8 '>
          <h2 className='font-[Gilroy-Medium] font-semibold'>Filters</h2>

          {/* Category Filter */}
          <h3 className='text-lg font-[Gilroy-Medium] mt-4 mb-2'>Categories</h3>
          <div className='flex flex-col space-y-2'>
            {filters.categories.map((category) => (
              <label className='px-2 cursor-pointer' key={category}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={filterState.category === category}
                  onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                  className='mr-2'
                />
                <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </label>
            ))}
          </div>

          {/* Color Filter */}
          <h3 className='text-lg font-[Gilroy-Medium] mt-6 mb-2'>Colors</h3>
          <div className='flex flex-col space-y-2'>
            {filters.colors.map((color) => (
              <label className='px-2 cursor-pointer' key={color}>
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={filterState.color === color}
                  onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
                  className='mr-2'
                />
                <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
              </label>
            ))}
          </div>

          {/* Price Filter */}
          <h3 className='text-lg font-[Gilroy-Medium] mt-6 mb-2'>Price</h3>
          <div className='flex flex-col space-y-2'>
            {filters.priceRange.map((range) => (
              <label className='px-2 cursor-pointer' key={range.label}>
                <input
                  type="radio"
                  name="priceRange"
                  value={range.label}
                  checked={filterState.priceRange === range.label}
                  onChange={(e) => setFilterState({ ...filterState, priceRange: e.target.value })}
                  className='mr-2'
                />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Dropdowns for small screens */}
        <div className='block lg:hidden w-full bg-white py-4 px-4 '>
          <h2 className='font-[Gilroy-Medium] font-semibold text-lg mb-4'>Filters</h2>

          <div className='space-y-4'>
            {/* Category Filter Dropdown */}
            <div className='relative'>
              <button
                className='w-full bg-red-700 text-white py-2 px-4 rounded-md font-[Gilroy-Medium]'
                onClick={() => toggleDropdown('category')}
              >
                Categories
              </button>
              {dropdownVisible.category && (
                <div className='absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md'>
                  {filters.categories.map((category) => (
                    <label className='block px-4 py-2 hover:bg-red-200 cursor-pointer' key={category}>
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={filterState.category === category}
                        onChange={(e) => setFilterState({ ...filterState, category: e.target.value })}
                        className='mr-2'
                      />
                      <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Color Filter Dropdown */}
            <div className='relative'>
              <button
                className='w-full bg-red-700 text-white py-2 px-4 rounded-md font-[Gilroy-Medium]'
                onClick={() => toggleDropdown('color')}
              >
                Colors
              </button>
              {dropdownVisible.color && (
                <div className='absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md'>
                  {filters.colors.map((color) => (
                    <label className='block px-4 py-2 hover:bg-gray-100 cursor-pointer' key={color}>
                      <input
                        type="radio"
                        name="color"
                        value={color}
                        checked={filterState.color === color}
                        onChange={(e) => setFilterState({ ...filterState, color: e.target.value })}
                        className='mr-2'
                      />
                      <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter Dropdown */}
            <div className='relative'>
              <button
                className='w-full bg-red-700 text-white py-2 px-4 rounded-md font-[Gilroy-Medium]'
                onClick={() => toggleDropdown('priceRange')}
              >
                Price
              </button>
              {dropdownVisible.priceRange && (
                <div className='absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md'>
                  {filters.priceRange.map((range) => (
                    <label className='block px-4 py-2 hover:bg-gray-100 cursor-pointer' key={range.label}>
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.label}
                        checked={filterState.priceRange === range.label}
                        onChange={(e) => setFilterState({ ...filterState, priceRange: e.target.value })}
                        className='mr-2'
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className='w-full lg:w-3/4 bg-white shadow-lg'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 lg:px-8 py-8'>
            {currentItems.length > 0 ? (
              currentItems.map((product) => {
                const filledStars = Math.floor(product.rating);
                const emptyStars = 5 - filledStars;

                return (
                  <Link to={`/product/${product.id}`} key={product.id} className='relative hover:scale-105 transition-transform duration-300'>
                    <img
                      className='w-full h-48 object-cover rounded-sm'
                      src={product.image}
                      alt={product.name}
                    />
                    <div className='absolute top-3 right-3'>
                      <button className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                        <MdOutlineShoppingCart className='text-white' />
                      </button>
                    </div>
                    <div className='text-center mt-4 px-2'>
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
      {filteredProducts.length > itemsPerPage && (
        <Stack spacing={2} alignItems='center' marginTop={4} marginBottom={4}>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color='secondary'
            shape='rounded'
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </div>
  );
};

export default Shop;
