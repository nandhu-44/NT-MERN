import React, { useEffect, useState } from "react";
import ContentDiv from "../components/ContentDiv";
import Hero from "../components/Hero";

function Center() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        let data;
        const cachedData = localStorage.getItem('movieList');
        const lastFetch = localStorage.getItem('lastFetch');

        if (cachedData && lastFetch && new Date().getTime() - lastFetch < 3600000) {
          data = JSON.parse(cachedData);
        } else {
          const response = await fetch(
            "https://6587d02290fa4d3dabf92599.mockapi.io/movielist",
          );
          data = await response.json();
          localStorage.setItem('movieList', JSON.stringify(data));
          localStorage.setItem('lastFetch', new Date().getTime());
        }

        setMovieList(data);
      } catch (error) {
        console.error("Error fetching movie list!");
      }
    };

    fetchMovieList();
  }, []);

  return (
    <>
      <Hero />
      {movieList.map((movie) => {
        let { heading, video_url, description, id } = movie;
        heading = heading.toLowerCase().includes("heading")
          ? video_url.split("/").reverse()[0].split(".")[0]
          : heading;
        heading = heading.charAt(0).toUpperCase() + heading.slice(1);
        let flexType = id % 2 === 0 ? "flex-row" : "flex-row-reverse";
        return (
          <ContentDiv
            key={id}
            name={heading}
            description={description}
            flexType={flexType}
            videoSrc={video_url}
          />
        );
      })}
    </>
  );
}

export default Center;
