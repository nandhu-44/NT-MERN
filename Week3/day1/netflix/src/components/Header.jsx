import React from "react";
import Button from "./Button";

function Header() {
  return (
    <header className="flex flex-row justify-between bg-neutral-900">
      <img
        className="w-44 px-4 py-3"
        src="assets/nflxlogo.webp"
        alt="Netflix"
      />
      <div className="justify-auto flex flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer">
        <select
          name="languages"
          id="languages"
          className="rounded-lg border-2 border-slate-500 bg-red-500 px-5 py-2 font-bold text-white hover:border-red-500 "
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="te">Telugu</option>
          <option value="ar">Arabic</option>
        </select>
        <Button text="Sign Up"/>
        <Button text="Sign In"/>
      </div>
    </header>
  );
}

export default Header;
