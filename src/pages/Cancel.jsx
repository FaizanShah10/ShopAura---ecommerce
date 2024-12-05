import React from 'react'
import { MdSmsFailed } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex justify-center pt-[230px]'>
      <MdSmsFailed  className='text-red-500 h-28 w-28'/>
      </div>
      <div className='text-center mt-4'>
        <h2 className='font-semibold text-xl'>Something Went Wrong</h2>
        <h2 className='text-lg'></h2>
        
        <button onClick={() => navigate('/dashboard/selected-classes')} className='px-5 py-3 bg-red-600 mt-4 text-white rounded-lg'>Try Again</button>
      </div>

    </div>
  )
}

export default Cancel