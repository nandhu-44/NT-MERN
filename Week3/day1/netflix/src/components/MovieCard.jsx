import React from "react";
import { Link } from "react-router-dom";

function MovieCard(movie) {
  const { title, backdrop_path, poster_path, release_date, overview } = movie;
  let image = backdrop_path?.endsWith("null") ? poster_path : backdrop_path;
  image = image?.startsWith("http")
    ? image
    : `https://image.tmdb.org/t/p/w500${image}`;

  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Link
        className="absolute left-4 top-4 z-50 rounded-full bg-red-500 p-2"
        to="/all-movies"
      >
        <svg
          class="h-6 w-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </Link>
      <img
        className="absolute h-full w-screen bg-black bg-cover opacity-20 bg-blend-overlay"
        src={image}
        alt={title}
      />
      <div className="mt-[20rem] flex flex-col px-20">
        <div className="text-5xl font-bold text-white">
          {title}
          {
            <span className="text-5xl font-medium text-slate-500">
              {" ("}
              {release_date}
              {")"}
            </span>
          }
        </div>
        <div className="mt-2 text-2xl text-white">{overview}</div>
      </div>
    </div>
  );
}

export default MovieCard;
