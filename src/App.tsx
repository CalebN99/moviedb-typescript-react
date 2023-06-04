import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import MovieList from "./components/movie/movie-list";
import MovieModal from "./components/movie/movie-modal";
import GenreFilter from "./components/filters/genre-filter";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { useMovieApi, ApiResponse } from "./hooks/movieApiHook";

function App() {
 
  const [modal, setModal] = useState(false);
  // const [movies, setMovies] = useState<ApiResponse>();


  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }

  let movies: ApiResponse = useMovieApi(
    "https://api.themoviedb.org/3/discover/movie?api_key=742b4f9ef0f1842c765810ec16e2e95a"
  );
  

  

  function genreFilter(id: Number) {
    console.log("Attempted Filter")
    let newArray = movies.data.results.filter((movie: any) => movie.genre_ids.includes(id));
    movies.data.results = newArray;
    console.log(movies.data.results)
  }
 


  return (
    <div className="App">
      <GenreFilter filter={genreFilter}/>
      <MovieModal modal={modal} closeModal={closeModal} />
      <MovieList movies={movies.data} openModal={openModal} />
    </div>
  );
}

export default App;
