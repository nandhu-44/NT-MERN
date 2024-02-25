import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section class="my-32 bg-none">
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div class="backdrop-blur-xs w-full rounded-lg border border-gray-700 bg-neutral-600 bg-opacity-70 bg-clip-padding shadow backdrop-filter sm:max-w-md md:mt-0 xl:p-0">
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Create an account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  class="mb-2 block text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full rounded-lg  bg-neutral-800  p-2.5 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="fullname"
                  class="mb-2 block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  class="block w-full rounded-lg  bg-neutral-800  p-2.5 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
                  placeholder="Alex Smith"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="phonenum"
                  class="mb-2 block text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phonenum"
                  id="phonenum"
                  class="block w-full rounded-lg  bg-neutral-800 p-2.5 text-white [appearance:textfield] focus:border-red-600 focus:outline-none focus:ring-red-600  sm:text-sm [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="1234567890"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  class="mb-2 block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••••"
                  class="block w-full rounded-lg  bg-neutral-800  p-2.5 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  class="mb-2 block text-sm font-medium text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••••"
                  class="block w-full rounded-lg  bg-neutral-800  p-2.5 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
                  required=""
                />
              </div>
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="focus:ring-3 h-4 w-4 rounded  border-gray-600 bg-gray-50 ring-offset-gray-800 focus:outline-none focus:ring-red-600"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label htmlFor="terms" class="font-light text-gray-300">
                    I accept the{" "}
                    <Link
                      class="font-medium text-red-600 hover:underline dark:text-red-500"
                      to="/terms-and-conditions"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  class="font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
