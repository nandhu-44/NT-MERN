import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/signin");
  };
  return (
    <nav className="flex justify-between p-4">
      <Link to="/" className="flex flex-row">
        <img src="/checkmark.png" alt="icon" className="h-8 w-8 rounded-full" />
        <h1 className="text-pretty px-2 font-sans text-2xl tracking-tight  text-white hover:text-blue-300">
          ToDo App
        </h1>
      </Link>
      <div className="flex flex-row">
        <h3 className="font-sane px-4 py-2 font-semibold text-white hover:cursor-pointer">
          Welcome {user?.name}
        </h3>
        <button
          className="rounded-lg bg-blue-400 p-1 px-4 py-2 font-sans font-semibold text-white hover:bg-blue-500"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
