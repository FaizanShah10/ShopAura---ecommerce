import React from 'react'
import { useFetchOrderByUserIdQuery } from '../../../Backend/auth/orderApi'
import { useSelector } from 'react-redux'

const Orders = () => {

    const {user} = useSelector((state) => state.auth)

    const {data: orders = [], error, isLoading} = useFetchOrderByUserIdQuery(user?.userId)
    console.log(orders)

    if(isLoading){
        return <div className='text-2xl font-semibold text-center'>Loading...</div>
    }

    if(error){
        return <div className='text-2xl font-semibold text-center'>Error loading orders</div>
    }



  return (
    <>
        <div>
            <h1 className='text-3xl font-[Gilroy-Bold] text-center mt-8'>Your Orders</h1>
            <div className='lg:w-full md:w-3/4'>
          <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Order Id</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'>Product Details</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Order Date</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Price</th>
                  {/* <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Total Amount</th> */}
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr 
                    key={index} 
                    
                    className="border-t">
                      <td className='px-4 py-2'>
                        <h2 className='font-[Gilroy-Bold] text-sm'>{order._id}</h2>
                      </td>
                      <td className='px-4 py-2'>
                        {
                            order.productInfo.map((product, index) => (
                                <li key={index} className="mb-4 list-none">
                                    <p className="text-sm"><span className='font-semibold'>Name:</span> {product.name}</p>
                                    <p className="text-sm"><span className='font-semibold'>Quantity:</span> {product.quantity}</p>
                                    <p className="text-sm"><span className='font-semibold'>Price per unit:</span> {product.price}</p>
                                </li>  
                            ))
                        }
                      </td>
                      
                      <td className='px-4 py-2'>{new Date(order.orderDate).toLocaleDateString()}</td>
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
    </>
  )
}

export default Orders