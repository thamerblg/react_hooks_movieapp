import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ moviesList }) => {
  return (
    <div className="row">
      {moviesList.map((element, i) => (
        <MovieCard key={i} movie={element} />
      ))}
    </div>
  );
};

export default MovieList;
