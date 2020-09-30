import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Movies } from "./components/movies/movies";
import  Navigation from "./components/navbar/navbar";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const featuredMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(featuredMovies);
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-md-wrap justify-content-center">
        {movies.map((movie) => (
          <Movies key={movie.id} {...movie} />
        ))}{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
