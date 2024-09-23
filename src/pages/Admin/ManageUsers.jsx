import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { useGetUsersQuery } from '../../../../Backend/auth/cartApi';


const ManageUsers = () => {

  const {data: users = [], error, isLoading} = useGetUsersQuery()
   console.log(users)


  

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
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 text-sm'></th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Current Price</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Category</th>
                  <th className='text-left font-[Gilroy-Bold] px-4 py-2 w-1/4 text-sm'>Actions</th>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
