import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import Card from "../components/Card";
import "./Display.css";

function Display() {
  const navigate = useNavigate();
  const { isAuth } = useContext(UserContext);
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
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
                Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
                Accept: "application/json",
              },
              method: "GET",
            });
            const data = await res.json();
            data.display_name = genre.display_name;
            console.log("data", data);
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
        setGenreList(response);
        console.log("response", response);
      });
    })();
  }, []);

  return (
    <div className="bg-slate-950 px-16 py-20">
      {genreList?.map((genre) => {
        return (
          <>
            <h1 className="mt-5 font-serif text-xl font-semibold text-white md:mt-10 ">
              {genre?.display_name}
            </h1>
            <div className="card-container flex w-full flex-row gap-5 overflow-x-scroll scroll-smooth py-4 text-white">
              {genre?.results?.map((movie) => {
                const { backdrop_path, release_date, title } = movie;
                const image = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
                return (
                  <Card
                    title={title}
                    image={image}
                    releaseDate={release_date}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Display;
