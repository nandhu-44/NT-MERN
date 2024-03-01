import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={props.to ?? "/"}
      className="cursor-pointer rounded-lg border-2 border-red-500  px-2 py-1 md:px-5 md:py-2 text-xs font-bold text-white hover:bg-red-500 md:text-sm lg:text-base"
    >
      {props?.text ?? "Button"}
    </Link>
  );
}

export default Button;
