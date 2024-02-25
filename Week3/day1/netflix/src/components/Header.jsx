import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between bg-neutral-900">
      <Link to="/" className="flex flex-row items-center">
      <img
        className="w-44 px-4 py-2"
        src="assets/nflxlogo.webp"
        alt="Netflix"
      />
      </Link>
      <div className="justify-auto flex flex-row items-center space-x-4 px-4 py-3 hover:cursor-pointer">
        <select
          name="languages"
          id="languages"
          className="rounded-lg border-2 border-neutral-900 bg-red-500 px-5 py-2 font-bold  text-white hover:border-red-500 hover:bg-neutral-900"
        >
          <option className="bg-neutral-900" value="en">
            English
          </option>
          <option className="bg-neutral-900" value="hi">
            Hindi
          </option>
          <option className="bg-neutral-900" value="te">
            Telugu
          </option>
          <option className="bg-neutral-900" value="ar">
            Arabic
          </option>
        </select>
        <Button text="Sign Up" to="/signup"/>
        <Button text="Sign In" to="/signin"/>
      </div>
    </header>
  );
}

export default Header;
