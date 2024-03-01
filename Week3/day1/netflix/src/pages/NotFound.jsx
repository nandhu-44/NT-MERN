import React from "react";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="main-image-area flex items-center justify-center px-16">
      <div className="my-44 flex h-auto flex-col items-center justify-center rounded-lg bg-[#2b2d31] bg-opacity-70 p-2 align-middle text-white md:my-32 md:p-20 lg:my-20 lg:p-16">
        <h1 className="py-2 text-sm font-bold md:py-4 md:text-2xl lg:p-4 lg:text-4xl">
          <span className="font-bold text-red-500">Error 404 : </span>
          Page Not Found!
        </h1>
        <p className="py-4 text-xs font-bold md:py-8 md:text-xl lg:py-16 lg:text-2xl">
          Sorry, the page you are looking for is not available!
        </p>
        <Button to="/#" text="Go back to main page" />
      </div>
    </div>
  );
}

export default NotFound;
