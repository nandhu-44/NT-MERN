import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import Card from "../components/Card";
import "./Display.css";
import Loader from "../components/Loader";

function Display() {
  const navigate = useNavigate();
  const { isAuth } = useContext(UserContext);
  const [genreList, setGenreList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    const { REACT_APP_TMDB_API_READ_ACCESS_TOKEN: token } = process.env;
    async function fetchMovieList() {
      const baseUrl =
        "https://api.themoviedb.org/3/%%type%%/%%genre%%?language=en-US&page=%%pageno%%";
      const genres = [
        { name: "top_rated", display_name: "Top Rated Movies", page: 1 },
        { name: "now_playing", display_name: "Now Playing", page: 1 },
        { name: "top_rated", display_name: "Popular", page: 2 },
      ];
      try {
        const response = await Promise.all(
          genres.map(async (genre) => {
            const url = baseUrl
              .replace("%%type%%", genre.type ?? "movie")
              .replace("%%genre%%", genre.name)
              .replace("%%pageno%%", genre.page);
            const res = await fetch(url, {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
              method: "GET",
            });
            const data = await res.json();
            data.display_name = genre.display_name;
            return data;
          }),
        );
        return response;
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    }

    (async () => {
      fetchMovieList().then((response) => {
        if (response.map((r) => r.status).includes(7)) {
          setGenreList([]);
        } else {
          setGenreList(response);
        }
      });
    })();
  }, []);

  useEffect(() => {
    if (genreList.length > 0) {
      setLoading(false);
    }
  }, [genreList]);

  return (
    <div className="bg-slate-950 px-16 py-20">
      {loading && <Loader />}
      <Link
        to="/all-movies"
        className="py-6 text-base font-medium text-red-500 hover:underline"
      >
        All Movies
      </Link>
      {genreList?.map((genre) => {
        return (
          <>
            <h1 className="mt-5 font-serif text-xl font-semibold text-white md:mt-10 ">
              {genre?.display_name}
            </h1>
            <div className="card-container flex w-full flex-row gap-5 overflow-x-scroll scroll-smooth py-4 text-white">
              {genre?.results?.map((movie) => {
                return <Card data={movie} />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Display;
