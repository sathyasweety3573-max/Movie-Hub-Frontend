import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, []);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="text-white p-6">
      <img src={movie.Poster} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;