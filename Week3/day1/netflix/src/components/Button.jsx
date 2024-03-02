import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={props.to ?? "/"}
      className="w-28 cursor-pointer rounded-lg border-2 border-red-500 px-6 py-1 text-center text-xs font-medium text-white hover:bg-red-500 md:w-auto md:px-5 md:py-2 md:text-sm md:font-bold lg:text-base"
    >
      {props?.text ?? "Button"}
    </Link>
  );
}

export default Button;
