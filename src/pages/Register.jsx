import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { useRegisterUserMutation } from '../../../Backend/auth/cartApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/features/authSlice'

const Register = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const {register, handleSubmit} = useForm()

  const [registerUser, {isLoading, error}] = useRegisterUserMutation()

  const handleRegister = async (data) => {
    try {
      // Perform the user registration via your API
      const result = await registerUser(data).unwrap();

      // Assuming the result contains 'user' with 'userId'
      const { _id: userId, fullName, email, birthday, role } = result.user;

      
      dispatch(setUser({
        user: {
          userId,
          fullName,
          email,
          birthday,
          role
        }
      }));

      // Navigate to home page or another appropriate route
      navigate('/');
    } catch (error) {
      // Handle errors appropriately
      console.log('Registration failed:', error.message || error);
    }
  };
  

  return (
    <div>
      <section className="bg-gray-50 dark:bg-">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white shadow-lg">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Create your <span className='text-red-700'>ShopAura</span> account
                    </h1>
                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name</label>
                            <input type="text" name="fullName" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" placeholder="FullName" required="" {...register('fullName')}/>
                        </div>


                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                            <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" placeholder="name@example.com" required="" {...register('email')}/>
                        </div>

                        <div>
                            <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Birthday</label>
                            <input type="date" name="birthday"  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" required="" {...register('birthday')}/>
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <input type="password" name="password"  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" placeholder="••••••••"  required="" {...register('password')}/>
                        </div>
                        
                        
                        <button type="submit" className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm text-center font-light text-gray-500 dark:text-black">
                            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                    {
                      error && <p>{error.message}</p>
                    }
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Register