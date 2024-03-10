import React from "react";

function Card({ title, image, releaseDate }) {
  return (
    <div className="rounded-lg shadow-lg">
      <img
        className="h-32 min-w-[15rem] object-cover rounded-lg object-center"
        src={image}
        alt={title}
      />
      <div className="p-6">
        <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
          {title} {" "} 
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            {" ("}{releaseDate.split("-")[0]}{")"}
          </span>
        </h3>
        <div className="flex items-center justify-between"></div>
      </div>
    </div>
  );
}

export default Card;
