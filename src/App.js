import React, { useEffect, useState } from "react";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import MovieList from "./components/MovieList/MovieList";
import { movies } from "./movies";

function App() {
  const [moviesList, setMoviesList] = useState(movies);
  const [titleSearch, setTitleSearch] = useState("");
  const [ratingSearche, setRatingSearche] = useState("");

  const filterMovie = () => {
    setMoviesList(
      movies.filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .startsWith(titleSearch.toLowerCase().trim()) &&
          movie.rating > ratingSearche
      )
    );
  };
  const AddNewMovie = (newMovie) => {
    movies.push(newMovie);
    setMoviesList([...moviesList, newMovie]);
  };
  useEffect(() => {
    filterMovie();
  }, [titleSearch, ratingSearche]);

  return (
    <div className="container my-3">
      <Filter
        setTitleSearch={setTitleSearch}
        ratingSearche={ratingSearche}
        setRatingSearche={setRatingSearche}
      />
      <MovieList moviesList={moviesList} />
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
}

export default App;
