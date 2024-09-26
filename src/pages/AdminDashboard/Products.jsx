import React, { useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux'
import { useDeleteProductMutation, useGetAllProductsQuery } from '../../../../Backend/auth/productApi';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Products = () => {
  const rowsRef = useRef([])

  useEffect(() => {
    
    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: -50 }, // Start state for each row
      {
        opacity: 1,
        y: 0, // End state
        duration: 0.6,
        stagger: 0.2, // Stagger each row by 0.2 seconds
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rowsRef.current[0], // Only trigger when the first row comes into view
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const dispatch = useDispatch()

  const {data: products = [], error, isLoading} = useGetAllProductsQuery()
  // console.log(products)

  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id); // Call the mutation with the product ID
      } catch (error) {
        console.error('Failed to delete product: ', error);
      }
    }
  };
  

  return (
    <div>
      <div>
        <h1 className='font-bold text-3xl text-center mt-10 mb-6'>
          Manage <span className='text-secondary'>Products</span>
        </h1>
        <div className='lg:w-full md:w-3/4'>
          <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Product info</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'>Old Price</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Current Price</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Category</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Actions</th>
                </tr>
              </thead>
              {
                products.map((items, index) => (
                  <tbody
                  ref={(el) => (rowsRef.current[index] = el)}
                  key={index}>
                {/* Sample data - Replace with dynamic content */}
                <tr className="border-t">
                  <td className='px-4 py-2 flex items-center gap-2'>
                    <img className='h-12 w-12' src={items.image} alt="" />
                    <h2 className='font-[Gilroy-Bold] text-sm'>{items.name}</h2>
                  </td>
                  <td className='px-4 py-2'>${items.oldPrice}</td>
                  <td className='px-4 py-2'>${items.price}</td>
                  <td className='px-4 py-2'>{items.category}</td>
                  <td className='px-4 py-2'>
                    <div className='flex space-x-4'>
                      <a href={`/edit-product/${items._id}`} className='text-blue-500 hover:underline'>Edit</a>
                      <button onClick={() => handleDeleteProduct(items._id)} className='text-red-500 hover:underline'>Delete</button>
                    </div>
                  </td>
                </tr>
                
               
              </tbody>
                ))
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
