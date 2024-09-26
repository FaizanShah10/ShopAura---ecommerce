import React, { useEffect, useRef } from 'react';
import { useFetchAllOrdersQuery } from '../../../../Backend/auth/orderApi';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ManageOrders = () => {

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

  const { data: orders = [], error, isLoading } = useFetchAllOrdersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading orders</p>;
  }

  // Function to get class based on order status
  const getStatusClass = (status) => {
    if (status === 'pending') {
      return ' text-yellow-500 font-semibold'; // Yellow for pending
    }
    if (status === 'shipped' || status === 'delivered') {
      return 'text-yellow-500 font-semibold'; // Green for shipped or delivered
    }
    return ''; // Default case (if needed)
  };

  return (
    <div>
      <div>
        <h1 className='font-bold text-3xl text-center mt-10 mb-6'>
          Manage <span className='text-secondary'>Orders</span>
        </h1>
        <div className='lg:w-full md:w-3/4'>
          <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Order Id</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'>Customer Name</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Order Date</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Order Status</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr 
                    key={index} 
                    ref={(el) => (rowsRef.current[index] = el)}
                    className="border-t">
                      <td className='px-4 py-2'>
                        <h2 className='font-[Gilroy-Bold] text-sm'>{order._id}</h2>
                      </td>
                      <td className='px-4 py-2'>{order.userName}</td>
                      <td className='px-4 py-2'>{new Date(order.orderDate).toLocaleDateString()}</td>
                      <td className='px-4 py-2'>
                        <span className={`px-2 py-1 rounded ${getStatusClass(order.orderSatus)}`}>
                          {order.orderSatus.charAt(0).toUpperCase() + order.orderSatus.slice(1)}
                        </span>
                      </td>
                      <td className='px-4 py-2'>${order.totalAmount.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-2xl font-semibold">No orders found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
