import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

function MovieDetails() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const baseUrl = `https://65ed3a950ddee626c9b15468.mockapi.io/allMovies/${id}`;
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(baseUrl, {
          method: "GET",
        });
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    fetchMovieDetails();
  }, [baseUrl]);

  useEffect(() => {
    // console.log(JSON.stringify(movie, null, 2));
    if (Object.keys(movie).length > 0) {
      setLoading(false);
    }
  }, [movie]);
  return (
    <div className="">
      {loading ? <Loader /> : <MovieCard {...movie} />}
      {/* <MovieCard {...movie} /> */}
    </div>
  );
}

export default MovieDetails;
