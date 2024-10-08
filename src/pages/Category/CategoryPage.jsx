import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

import { useGetAllProductsQuery } from '../../../../Backend/auth/productApi';
import { addToCart } from '../../redux/features/cartSlice';

import Footer from "../../components/Footer"
import { useDispatch } from 'react-redux';


const CategoryPage = () => {

  const { data: products = [], error, isLoading } = useGetAllProductsQuery(); 

  const dispatch = useDispatch()


  const {categoryName} = useParams()
  // console.log(categoryName)

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const filtered = products.filter((product) => product.category === categoryName)
    setFilteredProducts(filtered)
  }, [categoryName])



  return (
    <>
    <div className='w-full min-h-screen bg-gray-200'>

      <h2 className='text-3xl font-[Gilroy-Bold] text-center pt-10'>{categoryName}</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-10 lg:px-24 py-16'>
        {filteredProducts.map((product) => {
          // Determine the number of filled and empty stars based on the product rating
          const filledStars = Math.floor(product.rating);
          const emptyStars = 5 - filledStars;

          return (
            <Link to={`/product/${product._id}`} key={product.id} className='w-38 h-38 relative hover:scale-105 transition-all duration-300'>
              <img className='h-56 w-96 object-cover rounded-sm' src={product.image} alt={product.name} />
              <div className='absolute top-3 right-3'>
                <button onClick={() => dispatch(addToCart(product))} className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                    <i  className='text-white'><MdOutlineShoppingCart/></i>
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
          {Array.from({ length: filledStars }, (_, i) => (
            <HiStar key={i} className='text-yellow-500' />
          ))}
          {Array.from({ length: emptyStars }, (_, i) => (
            <HiOutlineStar key={i} className='text-yellow-500' />
          ))}
        </div>
              </div>
            </Link>
          )
        })}
      
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default CategoryPage