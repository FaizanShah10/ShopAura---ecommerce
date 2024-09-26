import React, { useEffect } from 'react';
import { useGetUsersQuery } from '../../../../Backend/auth/cartApi';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ManageUsers = () => {

  const rowsRef = useRef([]);

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

  const { data: users = [], error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading users</p>;
  }

  return (
    <div>
      <div>
        <h1 className='font-bold text-3xl text-center mt-10 mb-6'>
          Manage <span className='text-secondary'>Users</span>
        </h1>
        <div className='lg:w-full md:w-3/4'>
          <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>UserName</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'>User Email</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'>Total Orders</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Orders</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Total Spent</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr 
                      key={index} 
                      ref={(el) => (rowsRef.current[index] = el)} // Assign row ref to animate it later
                      className="border-t">
                      <td className='px-4 py-2'>
                        <h2 className='font-[Gilroy-Bold] text-sm'>{user.fullName}</h2>
                      </td>
                      <td className='px-4 py-2'>{user.email}</td>

                      {/* Displaying total orders */}
                      <td className='px-4 py-2'>{user.orders.length}</td>

                      {/* Display the orders */}
                      <td className='px-4 py-2'>
                        {user.orders && user.orders.length > 0 ? (
                          user.orders.map((orderArray, idx) => (
                            <ul key={idx}>
                              {orderArray.map((order, orderIdx) => (
                                <li key={orderIdx} className="mb-4">
                                  <p className="font-bold">{order.name}</p>
                                  <p className='text-sm'>Price: ${order.price} (Old Price: ${order.oldPrice})</p>
                                </li>
                              ))}
                            </ul>
                          ))
                        ) : (
                          <p>No orders</p>
                        )}
                      </td>

                      {/* Assuming you want to show total spent */}
                      <td className='px-4 py-2'>
                        ${user.orders.reduce((total, orderArray) => {
                          return orderArray.reduce((subTotal, order) => subTotal + order.price, total);
                        }, 0)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-2xl font-semibold">No users found</td>
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

export default ManageUsers;
