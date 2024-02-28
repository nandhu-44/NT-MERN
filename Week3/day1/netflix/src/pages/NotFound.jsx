import React from "react";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-6 flex h-auto flex-col items-center justify-center rounded-lg bg-[#2b2d31] bg-opacity-70 p-16 align-middle text-white">
        <h1 className="p-4 text-4xl font-bold">
          <span className="text-red-500 font-bold">Error 404 : </span>
          Page Not Found!
        </h1>
        <p className="py-20 text-2xl font-bold">
          Sorry, the page you are looking for is not available!
        </p>
        <Button to="/#" text="Go back to main page" />
      </div>
    </div>
  );
}

export default NotFound;
