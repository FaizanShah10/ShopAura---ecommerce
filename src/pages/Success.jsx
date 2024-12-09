import React, { useEffect } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const Success = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(clearCart())
  }, [dispatch])
  return (
    <div>
      <div className='flex justify-center pt-[230px]'>
        <FaCircleCheck  className='text-green-500 h-28 w-28'/>
      </div>
      <div className='text-center mt-4'>
        <h2 className='text-green-500 font-semibold text-xl'>PAYMENT SUCCESSFUL</h2>
        <h2 className='text-lg'>We received your purchased amount</h2>
        <h2 className='text-lg'>We'll be in touch shortly!!</h2>
        <button onClick={() => navigate('/')} className='px-5 py-3 bg-blue-600 shadow-md mt-4 text-white rounded-lg'>Back To Home</button>
      </div>

    </div>
  )
}

export default Success