import React from 'react'
import { useForm } from "react-hook-form"

const Login = () => {

  const {register, handleSubmit} = useForm()

  const handleLogin = (data) => {
    console.log(data)
    
  }

  return (
    <div>
      <section class="bg-gray-50 dark:bg-">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white shadow-lg">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Login
              </h1>
              <form onSubmit={handleSubmit(handleLogin)} class="space-y-4 md:space-y-6" action="#">
                

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" placeholder="name@example.com" required="" {...register('email')}/>
                  </div>

                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" name="password"  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:none dark:focus:none" placeholder="••••••••"  required="" {...register('password')}/>
                  </div>
                  
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-black">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-black" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm text-center font-light text-gray-500 dark:text-black">
                      Dont have an account? <a href="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
      </section>
    </div>
  )
}

export default Login