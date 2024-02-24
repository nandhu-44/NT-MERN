import React from "react";

function Button(props) {
  return (
    <div className="rounded-lg border-2 border-red-500 px-5 py-2 font-bold cursor-pointer text-white hover:bg-red-500">
        {props?.text ?? "Button"}
    </div>
  );
}

export default Button;
