import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const { title, backdrop_path, poster_path, release_date, _id } = data;
  const navigate = useNavigate();
  let currentPath = window.location.pathname;
  currentPath = currentPath.endsWith("/")
    ? currentPath.slice(0, -1)
    : currentPath;
    
  let image = `${!backdrop_path?.endsWith("null") ? backdrop_path : poster_path}`;
  if (!image.startsWith("http"))
    image = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  return (
    <div className="flex flex-col">
      <button
        className="rounded-lg shadow-lg"
        onClick={() => {
          if (_id) {
            navigate(`${currentPath}/${_id}`);
          }
        }}
      >
        <img
          className="h-16 min-w-[8rem] gap-x-4 rounded-lg object-cover object-center md:h-24 md:min-w-[13rem] md:gap-x-4 lg:h-32 lg:min-w-[15rem]"
          src={image}
          alt={title}
        />
      </button>
      <div className="px-2 pt-2 lg:p-6">
        <h3 className="mb-2 text-xs font-semibold text-gray-900 lg:text-base dark:text-white">
          {title}{" "}
          <span className=" text-xs font-medium text-gray-500 lg:text-sm dark:text-gray-400">
            {" ("}
            {release_date?.split("-")[0]}
            {")"}
          </span>
        </h3>
        <div className="flex items-center justify-between"></div>
      </div>
      {/* </button> */}
    </div>
  );
}

export default Card;
