import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

function AllMovies() {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://65ed3a950ddee626c9b15468.mockapi.io/allMovies",
      );
      const data = await response.json();
      setAllMovies(data);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (allMovies.length > 0) {
      setLoading(false);
    }
  }, [allMovies]);

  return (
    <div className="bg-slate-950 pl-4 py-4 lg:px-16 lg:py-20">
      {loading && <Loader />}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {allMovies?.map((movie) => {
          return <Card key={movie._id} data={movie} />;
        })}
      </div>
    </div>
  );
}

export default AllMovies;
