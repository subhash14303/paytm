import React from 'react';

const SignIn = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-500 width = 33px">
      <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto md:h-screen lg:py-0 w-full max-w-md">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-white-700">
            <div className="p-4 space-y-2 md:space-y-4 sm:p-6">
              <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-black">
                Sign In
              </h1>
              <div className="text-sm text-center text-gray-700 dark:text-gray-300">
                Enter your information to create the account
              </div>
              <form className="space-y-2 md:space-y-4" action="#">
              
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-black dark:hover:bg-gray-800 dark:focus:ring-primary-800"
                >
                  Sign In
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Dont have an account?{' '}
                  <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
