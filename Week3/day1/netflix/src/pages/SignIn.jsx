import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabaseClient from "../database/supabase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let { data: userData, error } = await supabaseClient
      .from("user_data")
      .select("*")
      .eq("email", email)
      .eq("password", password);
    if (error) {
      alert("An error occured while checking for existing user");
      console.log(error);
      return;
    }
    if (userData.length > 0) {
      setLoading(false);
      setTimeout(() => {
        alert("Logged in successfully!");
      }, 200);
      navigate("/#");
    } else {
      setLoading(false);
      setTimeout(() => {
        alert("Invalid email or password");
      }, 200);
    }
  };

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                      class="block w-full rounded-lg bg-neutral-800 p-2.5  text-white placeholder-gray-400 checked:bg-red-500 focus:border-red-600 focus:outline-none focus:ring-red-600 sm:text-sm "
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
                onClick={handleSubmit}
                disabled={loading}
                className={`flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${
                  loading ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="mr-2 animate-spin "
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Sign in"
                )}
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
