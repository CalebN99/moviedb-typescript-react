import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import MovieList from "./components/movie/movie-list";
import MovieModal from "./components/movie/movie-modal";
import "./App.css";


import { useMovieApi, ApiResponse } from "./hooks/movieApiHook";

function App() {
  const [modal, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }
  const movies: ApiResponse = useMovieApi(
    "https://api.themoviedb.org/3/discover/movie?api_key=742b4f9ef0f1842c765810ec16e2e95a"
  );

  let data = movies.data

  
  console.log(data)
  return (
    <div className="App">
     <MovieModal modal={modal} closeModal={closeModal} />

      <MovieList data={data} openModal={openModal} />
    </div>
  );
}

export default App;
