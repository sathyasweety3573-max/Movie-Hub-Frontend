import { getFavorites } from "../utils/localStorage";

function Favorites() {
  const movies = getFavorites();

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {movies.map((m) => (
        <div key={m.imdbID}>
          <img src={m.Poster} width="150" />
          <p className="text-white">{m.Title}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;