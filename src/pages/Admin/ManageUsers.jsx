import React from 'react';
import { useGetUsersQuery } from '../../../../Backend/auth/cartApi';

const ManageOrders = () => {
  const { data: users = [], error, isLoading } = useGetUsersQuery();
  console.log(users);

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
                    <tr key={index} className="border-t">
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

export default ManageOrders;
