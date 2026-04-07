import { getFavorites, saveFavorites } from "../utils/localStorage";

function MovieCard({ movie }) {
  const addFavorite = () => {
    const favs = getFavorites();
    saveFavorites([...favs, movie]);
  };

  return (
    <div className="w-52 bg-slate-800 rounded-lg p-2">
      <img src={movie.Poster} alt="" />
      <h2 className="text-white">{movie.Title}</h2>

      <button
        onClick={addFavorite}
        className="bg-red-500 text-white w-full mt-2"
      >
        ❤️ Add
      </button>
    </div>
  );
}

export default MovieCard;