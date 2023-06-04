// import react from "react";
import "../../styles/MovieList.css";
import ReactLoading from "react-loading";

function MovieList(props: any) {
  if (props.movies === undefined) {
    return <ReactLoading type={"spin"} color="#fff" />;
  } else {
    return (
      <div className="movie_list">
        {props.movies.results.map((movie: any) => {
          return (
            <div className="movie_card" onClick={() => props.openModal()}>
              <img
                src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
                alt="movie poster"
              />
              <h2>{movie.title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
