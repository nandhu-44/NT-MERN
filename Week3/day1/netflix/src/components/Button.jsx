import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link
      to={props.to ?? "/"}
      className="cursor-pointer rounded-lg border-2 border-red-500 px-5 py-2 font-bold text-white hover:bg-red-500"
    >
      {props?.text ?? "Button"}
    </Link>
  );
}

export default Button;
