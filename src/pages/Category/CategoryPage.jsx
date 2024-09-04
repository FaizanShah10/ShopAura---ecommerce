import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiStar, HiOutlineStar } from "react-icons/hi2";

import Products from "../../../public/Products.json"



import Footer from "../../components/Footer"

const CategoryPage = () => {

  const {categoryName} = useParams()
  // console.log(categoryName)

  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const filtered = Products.filter((product) => product.category === categoryName)
    setFilteredProducts(filtered)
  }, [categoryName])

  // console.log(filteredProducts)

  
  
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
            <Link to={`/shop/${product.id}`} key={product.id} className='w-38 h-38 relative hover:scale-105 transition-all duration-300'>
              <img className='h-56 w-96 object-cover rounded-sm' src={product.image} alt={product.name} />
              <div className='absolute top-3 right-3'>
                <button className='w-7 h-7 bg-red-700 hover:bg-red-800 rounded-full flex items-center justify-center'>
                    <i className='text-white'><MdOutlineShoppingCart/></i>
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
          )
        })}
      
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default CategoryPage