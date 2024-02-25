import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section class="bg-none">
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div class="backdrop-blur-xs w-full rounded-lg border border-gray-700 bg-neutral-600 bg-opacity-70 bg-clip-padding shadow backdrop-filter sm:max-w-md md:mt-0 xl:p-0">
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 class="tracking-tightmd:text-2xl text-xl font-bold leading-tight text-white">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
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
                  required="true"
                />
              </div>
              <div>
                <label
                  for="password"
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
                  required="true"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="block w-full rounded-lg  bg-neutral-800  p-2.5 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  class="text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  class="font-medium text-red-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
