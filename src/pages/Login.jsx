import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import {useDispatch } from 'react-redux'
import { useLoginUserMutation } from '../../../Backend/auth/authApi';
import { setUser } from '../redux/features/authSlice';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loginUser] = useLoginUserMutation(); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (data) => {
    // console.log(data)
    try {
      const result = await loginUser(data).unwrap();
      console.log("user logged in", result)
      const {user} = result // getting user from result data
      dispatch(setUser({user})) ///setting user in local storage
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred');
      console.log("Login failed:", error.message || error);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white shadow-lg">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Login
              </h1>
              <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                    placeholder="Enter your Email or phone Number"
                    required
                    {...register('email')}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black"
                    placeholder="••••••••"
                    required
                    {...register('password')}
                  />
                </div>

                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800">
                  Login
                </button>
                {errorMessage && <p className="text-sm text-center text-red-600">{errorMessage}</p>}

                <p className="text-sm text-center font-light text-gray-500 dark:text-black">
                  Don't have an account? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
